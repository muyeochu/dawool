from .models import RecommendTour
from .serializers import PopularTourSerializer , RecommendSerializer
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
import time


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
    start = time.time()  # 시작 시간 저장
    # 나중에는 get으로 전부 바꿔야함 
    if(request.method == 'GET'):
        try:
            # JWT 토큰 추출
            token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
            if token == "null":   
                dict_data = popular_sorted(int(spot_id))
                print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
                return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)

            # JWT 디코딩
            user_id = decode_jwt(token)

            object_id = user_id['sub']

            user_result = collection.find({'_id': ObjectId(object_id)})       
            # 사용자 정보 
            user = list(user_result)[0]

            # 사용자가 취향 설문을 했을 때 
            try:
                 # 갔던곳, 선호 관광지 배열 > 여러 개 
                visitLocation = user['survey']['visitLocation']
                # 선호 시간 > 1시간 50000
                userTime = user['survey']['preferredTime']

                preferredTime = int(userTime) * 50000
    
                # 출발지 배열 > 출발지 배열 
                departure = user['survey']['departure']
                
                # 취향 설문  >  선호 거리 
                result_df = neartime_find(preferredTime,departure, target_collection)
                print(result_df)
                # 취향 설문 >  무장애 타입, 갔던 관광지, 인기관광지 여부 
                result_data = survey_recommend(user, int(spot_id), result_df, visitLocation)
                print(result_data)
                result_data = result_data[result_data['contenttypeid']==int(spot_id)]

                # 필요한 컬럼만 추출
                result_data = result_data.rename(columns={'contentid': 'contentId','contenttypeid':'contentTypeId','firstimage':'imageUrl'})
       
                dict_data = result_data[:4].to_dict(orient='records')
            
            # 취향 설문 안했을때 인기순
            except:
                dict_data = popular_sorted(int(spot_id))

                print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        # 로그인 안했을때, 인기순
        except ValueError and IndexError:
            
            dict_data = popular_sorted(int(spot_id))
            print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)

        except Exception as e:
            logging.error(str(e), exc_info=True)
    
    return JsonResponse({'message': 'spot_list error'}, status=status.HTTP_404_NOT_FOUND)

# 식당 추천 
@api_view(['POST'])
def food_list(request):
    logging.basicConfig(level=logging.INFO)
    logging.info('식당 추천 시작')
    start = time.time()  # 시작 시간 저장
    if(request.method == 'POST'):
        try:
            dict_data = recommend_logic(request, 39)
            print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        # 로그인 안했을때, 인기순
        except ValueError and IndexError:
            # 식당 인기순 
            contenttype_id = 39
            dict_data = popular_sorted(contenttype_id)
            print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        except Exception as e:
            logging.error(str(e), exc_info=True)
    
    return JsonResponse({'message': 'food_list error'}, status=status.HTTP_404_NOT_FOUND)

# 숙박 추천 
@api_view(['POST'])
def stay_list(request):
    logging.basicConfig(level=logging.INFO)
    logging.info('숙박 추천 시작')

    if(request.method == 'POST'):
        try:
            dict_data = recommend_logic(request, 32)
    
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        # 로그인 안했을때, 인기순
        except ValueError and IndexError:
            # 인기순 정렬 
            contenttype_id = 32
            dict_data = popular_sorted(contenttype_id)
            # print("정렬 후 time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        except Exception as e:
            logging.error(str(e), exc_info=True)
    
    return JsonResponse({'message': 'stay_list error'}, status=status.HTTP_404_NOT_FOUND)


# 식당 & 숙박 추천 알고리즘 
def recommend_logic(request, contenttypeid):
            
    # 최근 검색 관광지 정보 찾기 
    request_body = request.body.decode('utf-8')
    request_dict = json.loads(request_body)

    recently_contentid = request_dict['contentid']

    recently_data = RecommendTour.objects.filter(contentid=recently_contentid)
    se = RecommendSerializer(recently_data, many=True)
    # print("데이터 불러오기 time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
    contentid_data = se.data
    dict_content = contentid_data[0]['location']
    # mapx = contentid_data['location']['coordinates']['mapx']
    mapx = eval(dict_content)['coordinates']['mapx']
    mapy = eval(dict_content)['coordinates']['mapy']
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

    # 선호 시간 가장 가까이 30분 거리 
    preferredTime = 25000

    # 30분 거리 
    result_df = neartime_find(preferredTime, departure, target_collection)

    # 사용자가 취향 설문을 했을 때 
    try: 
        # 취향설문 갔던곳, 선호 관광지 배열 > 여러 개 
        visitLocation = user['survey']['visitLocation']

        # 취향 설문 >  무장애 타입, 갔던 관광지, 인기관광지 여부 
        result_data = survey_recommend(user, contenttypeid, result_df, visitLocation)


         # 필요한 컬럼만 추출
        selected_column = result_data.rename(columns={'contentid': 'contentId','contenttypeid':'contentTypeId','firstimage':'imageUrl'})
        dict_data = selected_column[:4].to_dict(orient='records')

    
    # 취향 설문 안했을때 근처에서 인기순, 근처 거리에 관광지가 없을때 그냥 인기순 
    except:
        dict_data = popular_sorted(contenttypeid)

   
    return dict_data


# 사용자 취향 설문 없을때 인기 순으로 
def popular_sorted(contenttype_id):
    logging.info("취향설문 없을때 인기 순!!====================")

    contenttype_data = RecommendTour.objects.filter(contenttypeid=contenttype_id).order_by('-searchcount')[:4]
    se = PopularTourSerializer(contenttype_data, many=True)
    dict_data = se.data

    logging.info("인기순 종료!!!====================")

    return dict_data


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
def survey_recommend(user, contenttypeid, result_df, visitLocation):
    logging.info("취향 설문 있을 때 추천!!====================")

    # 무장애 타입 
    barrier_type = user['survey']['barrier']

    # 타입별 변수 할당 
    is_mobility,is_visual,is_deaf,is_old, is_infant = barrier_type

    # 인기 관광지 여부 
    is_popular = int(user['survey']['densePopulation']) -1


    # 선호 관광지  > 여러개로 바꾸기 
    target_data =  pd.DataFrame()
    for visited in visitLocation:
 
        visited_spots = RecommendTour.objects.filter(contentid=int(visited))
        se = RecommendSerializer(visited_spots, many=True)
        target_one = pd.DataFrame(se.data)  
        target_data = pd.concat([target_data, target_one])
    
    near_contenttype_df = result_df[result_df['contenttypeid']==contenttypeid].reset_index(drop= True)



    # 무장애 여부 필터링 
    Barrier_data = Barrier_filter(int(is_mobility),int(is_visual), int(is_deaf), int(is_old), int(is_infant), near_contenttype_df)

    # 인기 관광지 여부 필터링
    recommend_tour = popular_filter(is_popular, Barrier_data, target_data)

    # 추천 결과 
    result_data = pd.DataFrame()
    for i in recommend_tour:
        recommend_one = RecommendTour.objects.filter(contentid= i[0])
        se = PopularTourSerializer(recommend_one, many=True)
        target_data = pd.DataFrame(se.data)
        result_data = pd.concat([result_data,target_data])

    result_data = result_data[result_data['contenttypeid']==contenttypeid]
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
def tfidf_matrix(contentid,review_data):
  logging.info("텍스트 유사도!============")
 
  tfidf = TfidfVectorizer(max_features=500, stop_words='english')
  tfidf_matrix = tfidf.fit_transform(review_data['keyword_result'])
  cosine_matrix = cosine_similarity(tfidf_matrix, tfidf_matrix)
  
  
  #  title와 id를 매핑할 dictionary를 생성해줍니다. 
  title2idx = {}
  for i, c in enumerate(review_data['contentid']): 
      title2idx[i] = c

  # id와 title를 매핑할 dictionary를 생성해줍니다. 
  idx2title = {}
  for i, c in title2idx.items(): 
      idx2title[c] = i

  idx = idx2title[contentid]
  sim_scores = [(i, c) for i, c in enumerate(cosine_matrix[idx]) if i != idx] # 자기 자신을 제외한 관광지들의 유사도 및 인덱스를 추출 
  
  sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse=True) # 유사도가 높은 순서대로 정렬 
  sim_scores = [(title2idx[i], score) for i, score in sim_scores[0:4]]
  
  return sim_scores

# 인기관광지 여부 
def popular_filter(count, Barrier_data, target_data):  
    # count : 밀집도 선호도 1이면 인기관광지 
    print("인기여부",count)
    if count == 1:
        logging.info("인기관광지 선택!!====================")
        full_data = popular_concat(Barrier_data, target_data)
        popular_data = full_data[[full_data['searchcount']>0]].reset_index(drop= True)

        # 인기관광지 검색건수가 4 보다 작다면 
        if len(popular_data)<4:
            logging.info("인기 검색 건수 작아서 전체 관광지로 변경!!====================")
            result_list = popular_recommend(full_data, target_data)
            return result_list
        # 인기관광지 검색건수가 4 보다 클때 
        else:
            full_data = popular_concat(popular_data, target_data)
            result_list = popular_recommend(popular_data, target_data)
            return result_list
    
    # 비 인기관광지
    else:
        logging.info("비인기관광지 선택!!==========================")
        no_popular_data = Barrier_data[Barrier_data['searchcount'] == 0]
        full_data = popular_concat(no_popular_data, target_data)
        result_list = popular_recommend(full_data, target_data)

    print(result_list)
    return result_list


# 인기 관광지 여부에 따라 데이터 합치기
def popular_concat(data, target_data):
    concat_data = pd.concat(objs=[data, target_data], axis=0, ignore_index=True)
    is_popular = concat_data.reset_index(drop=True)
    
    return is_popular


# 인기관광지 여부에 따라 추천 
def popular_recommend(popular_data, target_data):
    logging.info("인기관광지 여부에 따라 추천 !============")
    target_data = target_data.reset_index(drop=True)
    recommend_result = []
    for i in range(len(target_data)):
        contentid = target_data['contentid'].values[i]   
        recommend_tour = tfidf_matrix(contentid, popular_data)
        recommend_result.append(recommend_tour)
    
    # 중복제거 
    sum_data = sum(recommend_result, [])

    recommend_list = [t for i, t in enumerate(sum_data) if t[0] not in [d[0] for d in sum_data[:i]]]

    # 유사도가 높은 순서대로 정렬 

    result_list = sorted(recommend_list, key = lambda x: x[1], reverse=True)
    logging.info("유사도 높은 순서대로 추천!============")

    return result_list



# 무장애 필터 
def Barrier_filter(is_mobility,is_visual, is_deaf, is_old, is_infant, near_contenttype_df):
    logging.info("무장애 필터 시작!=================")
    Barrier_data = near_contenttype_df[(near_contenttype_df['deaf'] >= is_deaf) & (near_contenttype_df['visual_impaired'] >= is_visual) & (near_contenttype_df['mobility_weak'] >= is_mobility) & (near_contenttype_df['old'] >= is_old) & (near_contenttype_df['infant'] >= is_infant) ].reset_index(drop= True)
    return Barrier_data



