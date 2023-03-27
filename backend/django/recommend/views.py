from .models import RecommendTour
from .serializers import RecommendTourSerializer
import pandas as pd
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework import status
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import logging
import jwt  
from django.conf import settings
from bson import ObjectId
from pymongo import MongoClient
import base64
import json


DATABASE_URL = settings.DATABASES['default']['CLIENT']['host']

client = MongoClient(DATABASE_URL)

db = client.S08P22D105 # 데이터베이스 

target_collection = db.recommend_tour

collection = db.user # 컬렉션 

# 12- 관광지, 14 -문화생활, 28-레포츠, 38-쇼핑
@api_view(['GET'])
def spot_list(request, spot_id):
    logging.basicConfig(level=logging.INFO)
    logging.info('관광지 추천 시작')
    # 나중에는 get으로 전부 바꿔야함 
    if(request.method == 'GET'):
        try:
            # JWT 토큰 추출
            token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
            # JWT 디코딩
            user_id = decode_jwt(token)


            object_id = user_id['sub']

            user_result = collection.find({'_id': ObjectId(object_id)})       
            # 사용자 정보 
            user = list(user_result)[0]

            # 갔던곳, 선호 관광지 배열 > 여러 개 
            visitLocation = user['survey']['visitLocation']
    
            # 사용자가 취향 설문을 했을 때 
            if len(user['survey']) > 1:
                # 선호 시간 > 1시간 50000
                userTime = user['survey']['preferredTime']

                preferredTime = int(userTime) * 50000
    
                # 출발지 배열 > 출발지 배열 
                departure = user['survey']['departure']
                
                # 취향 설문  >  선호 거리 
                result_df = neartime_find(preferredTime,departure, target_collection)
                # 취향 설문 >  무장애 타입, 갔던 관광지, 인기관광지 여부 
                result_data = survey_recommend(user, spot_id, result_df, visitLocation)
            
            # 취향 설문 안했을때 인기순
            else:
                spots = RecommendTour.objects.all()
                se = RecommendTourSerializer(spots, many=True)
                data = pd.DataFrame(se.data) 
                result_data = popular_sorted(spot_id, data)

            # 필요한 컬럼만 추출
            selected_column = result_data[['contentid','contenttypeid', 'title','firstimage']]
            selected_column = selected_column.rename(columns={'contentid': 'contentId','contenttypeid':'contentTypeId','firstimage':'imageUrl'})
            selected_column["liked"] = False
            dict_data = selected_column.to_dict(orient='records')
        

            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        except Exception as e:
            logging.error(str(e), exc_info=True)
    
    return JsonResponse({'message': 'spot_list error'}, status=status.HTTP_404_NOT_FOUND)

# 식당 추천 
@api_view(['POST'])
def food_list(request):
    logging.basicConfig(level=logging.INFO)
    logging.info('식당 추천 시작')
    # 나중에는 get으로 전부 바꿔야함 
    if(request.method == 'POST'):
        try:
            food_id = 39
            # 최근 검색 관광지 정보 찾기 
            request_body = request.body.decode('utf-8')
            request_dict = json.loads(request_body)

            recently_contentid = request_dict['contentid']

            find_result = target_collection.find({'contentid': recently_contentid})

            find_result_list = list(find_result)[0]

            mapx = find_result_list['location']['coordinates']['mapx']
            mapy = find_result_list['location']['coordinates']['mapy']
             # 출발지 배열 > 출발지 배열 
            departure = [mapx, mapy]
            
            # JWT 토큰 추출
            token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]

            # JWT 디코딩
            user_id = decode_jwt(token)

            object_id = user_id['sub']

            user_result = collection.find({'_id': ObjectId(object_id)}) 

            # 사용자 정보 
            user = list(user_result)[0]

            # 갔던곳, 선호 관광지 배열 > 여러 개 
            visitLocation = user['survey']['visitLocation']

            # 선호 시간 가장 가까이 30분 거리 
            preferredTime = 25000
    
            # 30분 거리 
            result_df = neartime_find(preferredTime, departure, target_collection)

            # 사용자가 취향 설문을 했을 때 
            if len(user['survey']) > 1:
                # 취향 설문 >  무장애 타입, 갔던 관광지, 인기관광지 여부 
                result_data = survey_recommend(user, food_id, result_df, visitLocation)
            
            # 취향 설문 안했을때 근처에서 인기순, 근처 거리에 관광지가 없을때 그냥 인기순 
            else:
                result_data = popular_sorted(food_id, result_df)

            # 필요한 컬럼만 추출
            selected_column = result_data[['contentid','contenttypeid', 'title','firstimage']]
            selected_column = selected_column.rename(columns={'contentid': 'contentId','contenttypeid':'contentTypeId','firstimage':'imageUrl'})
            selected_column["liked"] = False
            dict_data = selected_column.to_dict(orient='records')
        

            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        except Exception as e:
            logging.error(str(e), exc_info=True)
    
    return JsonResponse({'message': 'food_list error'}, status=status.HTTP_404_NOT_FOUND)




# 사용자 취향 설문 없을때 인기 순으로 
def popular_sorted(contenttype_id, data):
    logging.info("취향설문 없을때 인기 순!!====================")

    columns_name = ['contentid','contenttypeid','deaf','visual_impaired','mobility_weak', 'old', 'infant','searchcount']
    for name in columns_name:
        data[name] = data[name].apply(lambda x: int(float(x)))

    type_data = data[data['contenttypeid'] == int(contenttype_id)] 
    result_data = type_data.sort_values(by='Salary', ascending=False).head(4)

    return result_data


# 선호 시간(거리)로 데이터 찾기 
def neartime_find(preferredTime, departure, target_collection):
    logging.info("선호 시간으로 데이터 찾기!!====================")

    # 선호시간 거리 계산으로 목록 뽑기 
    query = {
        "location": {
            "$near": {
            "$geometry": {
                "type": "Point",
                "coordinates": departure
            },
            "$maxDistance": preferredTime 
            }
        }
    }

    result = target_collection.find(query)

    
    find_data = []
    for document in result:
        find_data.append(document)

    result_df = pd.DataFrame(find_data)

    return result_df



# 취향 설문 있을때 로직 
def survey_recommend(user, spot_id, result_df, visitLocation):
    logging.info("취향 설문 있을 때 추천!!====================")

    # 무장애 타입 
    barrier_type = user['survey']['barrier']

    # 타입별 변수 할당 
    is_deaf, is_visual, is_mobility , is_old, is_infant = barrier_type

    # 인기 관광지 여부 
    is_popular = int(user['survey']['densePopulation']) -1

    spots = RecommendTour.objects.all()
    se = RecommendTourSerializer(spots, many=True)
    data = pd.DataFrame(se.data) 

        
    # 타입 int로 바꿔주기 
    columns_name = ['contentid','contenttypeid','deaf','visual_impaired','mobility_weak', 'old', 'infant','searchcount']
    for name in columns_name:
        data[name] = data[name].apply(lambda x: int(float(x)))

    
    # 관광지type >url로 넘어오는 spot_id
    type_data = result_df[result_df['contenttypeid'] == int(spot_id)] 

    # 선호 관광지  > 여러개로 바꾸기 
    target_data =  pd.DataFrame()
    for visited in visitLocation:
        target_one = data[data['contentid'] == int(visited)]
        target_data = pd.concat([target_data, target_one])
    
    # 무장애 여부 필터링 
    Barrier_data = Barrier_filter(int(is_deaf),int(is_visual), int(is_mobility), int(is_old), int(is_infant), type_data)

    # 인기 관광지 여부 필터링
    recommend_tour = popular_filter(is_popular, Barrier_data, target_data)

    # 추천 결과 
    result_data = pd.DataFrame()
    for i in recommend_tour:
        target_data = type_data[type_data['title'] == i[0]]
        result_data = pd.concat([result_data,target_data])

    return result_data 




# 토큰 디코딩 
def decode_jwt(token):
    logging.info("토큰 디코딩!============")

    # JWT decode에 사용할 secret key
    SECRET_KEY = settings.JWT_SECRET_KEY
    # JWT decode
    encoded_secret_key = base64.b64decode(SECRET_KEY + '==')
    
    # payload
    decoded_payload = jwt.decode(token, encoded_secret_key,algorithms=['HS256'])
    return decoded_payload


# 텍스트 유사도 추천 알고리즘 
def tfidf_matrix(keyword_title,review_data):
  tfidf = TfidfVectorizer(max_features=500, stop_words='english')
  tfidf_matrix = tfidf.fit_transform(review_data['keyword_result'])
  cosine_matrix = cosine_similarity(tfidf_matrix, tfidf_matrix)
  #  title와 id를 매핑할 dictionary를 생성해줍니다. 
  title2idx = {}
  for i, c in enumerate(review_data['title']): 
      title2idx[i] = c

  # id와 title를 매핑할 dictionary를 생성해줍니다. 
  idx2title = {}
  for i, c in title2idx.items(): 
      idx2title[c] = i


  idx = idx2title[keyword_title]
  sim_scores = [(i, c) for i, c in enumerate(cosine_matrix[idx]) if i != idx] # 자기 자신을 제외한 관광지들의 유사도 및 인덱스를 추출 
  sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse=True) # 유사도가 높은 순서대로 정렬 
  sim_scores = [(title2idx[i], score) for i, score in sim_scores[0:4]]
  logging.info("텍스트 유사도!============")
  
  return sim_scores

# 인기관광지 여부 
def popular_filter(count, data, target_data):  
    # count : 밀집도 선호도 1이면 인기관광지 
    if count == 1:
        logging.info("인기관광지 선택!!====================")
        popular_data = data[data['searchcount'] > 0] 
        # 인기관광지 검색건수가 4 보다 작다면 
        if len(popular_data)<4:
            logging.info("인기 검색 건수 작아서 비인기 관광지로 변경!!====================")
            no_popular_index_reset = popular_concat(data, target_data)
            result_list = popular_recommend(no_popular_index_reset, target_data)
            pass
        # 인기관광지 검색건수가 4 보다 클때 
        else:
            popular_index_reset = popular_concat(popular_data, target_data)
            result_list = popular_recommend(popular_index_reset, target_data)

    # 비 인기관광지
    else:
        logging.info("비인기관광지 선택!!==========================")
        no_popular_index_reset = popular_concat(data, target_data)
        result_list = popular_recommend(no_popular_index_reset, target_data)

    return result_list


# 인기 관광지 여부에 따라 데이터 합치기
def popular_concat(data, target_data):
    concat_data = pd.concat(objs=[data, target_data], axis=0, ignore_index=True)
    is_popular = concat_data.reset_index(drop=True)
    
    return is_popular


# 인기관광지 여부에 따라 추천 
def popular_recommend(popular_data, target_data):
    recommend_result = []
    for i in range(len(target_data)):
        title = target_data['title'].values[i]
        recommend_tour = tfidf_matrix(title, popular_data)
        recommend_result.append(recommend_tour)
    
    recommend_list = sum(recommend_result, [])
    # 유사도가 높은 순서대로 정렬 
    result_list = sorted(recommend_list, key = lambda x: x[1], reverse=True)[0:4]
    logging.info("유사도 높은 순서대로 추천!============")

    return result_list



# 무장애 필터 
def Barrier_filter(deaf, visual_impaired,mobility_weak,old,infant, type_data):
    logging.info("무장애 필터 시작!=================")
    Barrier_data = type_data[(type_data['deaf'] >= deaf) & (type_data['visual_impaired'] >= visual_impaired) & (type_data['mobility_weak'] >= mobility_weak) & (type_data['old'] >= old) & (type_data['infant'] >= infant) ].reset_index(drop= True)

    return Barrier_data



