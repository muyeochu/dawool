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

# 12- 관광지, 14 -문화생활, 28-레포츠, 35-쇼핑
@api_view(['GET'])
def spot_list(request, spot_id):
    logger = logging.getLogger(__name__)
    logger.info('info message')
    # 나중에는 get으로 전부 바꿔야함 
    if(request.method == 'GET'):
        try:
            # JWT 토큰 추출
            token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]

            # JWT 디코딩
            user_id = decode_jwt(token)

            client = MongoClient('mongodb+srv://S08P22D105:Cw7h8LqfQd@ssafy.ngivl.mongodb.net/S08P22D105?')

            db = client.S08P22D105 # 데이터베이스 이름을 알맞게 입력해주세요
            collection = db.user # 컬렉션 이름을 알맞게 입력해주세요
            tour_collection = db.recommend_tour
            
            object_id = user_id['sub']
            print(object_id)

            user_result = collection.find({'_id': ObjectId(object_id)})       
            # 사용자 정보 
            user = list(user_result)[0]
            
            # 선호 시간 > 1시간 50000
            userTime = user['survey']['preferredTime']

            preferredTime = int(userTime) * 50000
            
            # 무장애 타입 
            barrier_type = user['survey']['barrier']

            # 타입별 변수 할당 
            deaf,visual_impaired,mobility_weak, old, infant = barrier_type


            # 인기 관광지 여부 
            is_popular = int(user['survey']['densePopulation']) -1

            # 출발지 배열 > 출발지 배열 
            departure = user['survey']['departure']

            # 갔던곳, 선호 관광지 배열 > 여러 개 
            visitLocation = user['survey']['visitLocation']
            

            print(preferredTime, barrier_type,is_popular, departure,visitLocation )

            spots = RecommendTour.objects.all()
            se = RecommendTourSerializer(spots, many=True)
            data = pd.DataFrame(se.data) 


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

            result = tour_collection.find(query)

            
            find_data = []
            for document in result:
                find_data.append(document)
            

            result_df = pd.DataFrame(find_data)
            print(result_df)

               
            # 타입 int로 바꿔주기 
            columns_name = ['contentid','contenttypeid','deaf','visual_impaired','mobility_weak', 'old', 'infant','searchcount']
            for name in columns_name:
                data[name] = data[name].apply(lambda x: int(float(x)))

            
            # 관광지type >url로 넘어오는 spot_id
            type_data = result_df[result_df['contenttypeid'] == int(spot_id)] 

            # 선호 관광지  > 여러개로 바꾸기 
            target_data = data[data['contentid'] == int(visitLocation[0])] 
            print(target_data)
            
            # 무장애 여부 필터링 
            Barrier_data = Barrier_filter(int(deaf),int(visual_impaired), int(mobility_weak), int(old), int(infant), type_data, target_data)

            # 인기 관광지 여부 필터링
            recommend_tour = popular_filter(is_popular, Barrier_data, target_data)

            # 추천 결과 
            result_data = pd.DataFrame()
            for i in recommend_tour:
                target_data = result_df[result_df['title'] == i[0]]
                result_data = pd.concat([result_data,target_data])
            print(result_data)

            # firstimage 추가해야함!,is liked 여부도! 
            selected_column = result_data[['contentid','contenttypeid', 'title','searchcount','deaf','visual_impaired','mobility_weak', 'old', 'infant','firstimage']]
            dict_data = selected_column.to_dict(orient='records')

            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        except Exception as e:
            print('error')
    
    return JsonResponse({'message': 'spot_list error'}, status=status.HTTP_404_NOT_FOUND)

# 토큰 디코딩 
def decode_jwt(token):
    # JWT decode에 사용할 secret key
    SECRET_KEY = settings.JWT_SECRET_KEY
    # JWT decode
    print(SECRET_KEY)
    encoded_secret_key = base64.b64decode(SECRET_KEY + '==')
    
    # payload
    decoded_payload = jwt.decode(token, encoded_secret_key,algorithms=['HS256'])
    return decoded_payload


# 텍스트 유사도 
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
  
  return sim_scores

# 인기관광지 여부 
def popular_filter(count, data, target_data):  
    if count == 1:
        print("인기관광지임!!====================")
        popular_data = data[data['searchcount'] > 0] #538개 
        concat_data = pd.concat(objs=[popular_data, target_data], axis=0, ignore_index=True)
        popular_index_reset = concat_data.reset_index(drop=True)

        recommend_result = []
        for i in range(len(target_data)):
            title = target_data['title'].values[i]
            recommend_tour = tfidf_matrix(title, popular_index_reset)
            recommend_result.append(recommend_tour)
        
        recommend_list = sum(recommend_result, [])
        print(recommend_list)
        result_list = sorted(recommend_list, key = lambda x: x[1], reverse=True)[0:4] # 유사도가 높은 순서대로 정렬 
    else:
        print("인기관광지 아님!!==========================")
        concat_data = pd.concat(objs=[data, target_data], axis=0, ignore_index=True)
        no_popular_index_reset = concat_data.reset_index(drop=True)
        recommend_result = []
        for i in range(len(target_data)):
            title = target_data['title'].values[i]
            recommend_tour = tfidf_matrix(title, no_popular_index_reset)
            recommend_result.append(recommend_tour)
        
        recommend_list = sum(recommend_result, [])
        print(recommend_list)
        result_list = sorted(recommend_list, key = lambda x: x[1], reverse=True)[0:4] # 유사도가 높은 순서대로 정렬 

    return result_list


# 무장애 필터 
def Barrier_filter(deaf, visual_impaired,mobility_weak,old,infant, data, target_data):
    print(deaf, visual_impaired,mobility_weak,old,infant)
    Barrier_data = data[(data['deaf'] >= deaf) & (data['visual_impaired'] >= visual_impaired) & (data['mobility_weak'] >= mobility_weak) & (data['old'] >= old) & (data['infant'] >= infant) ].reset_index(drop= True)

    return Barrier_data



