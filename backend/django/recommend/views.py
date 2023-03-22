from .models import RecommendTour
from .serializers import RecommendTourSerializer
import pandas as pd
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework import status
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import logging
# 12- 관광지, 14 -문화생활, 28-레포츠, 35-쇼핑
@api_view(['POST'])
def spot_list(request, spot_id):
    logger = logging.getLogger(__name__)
    logger.info('info message')
    # 나중에는 get으로 전부 바꿔야함 
    if(request.method == 'POST'):
        try:
            request_data = request.data
            contentid = request_data['contentid']
            is_popular = request_data["is_popular"]
            deaf = request_data["deaf"]
            visual_impaired =  request_data["visual_impaired"]
            mobility_weak = request_data["mobility_weak"]
            old = request_data["old"]
            infant = request_data["infant"]

            spots = RecommendTour.objects.all()
            se = RecommendTourSerializer(spots, many=True)
            data = pd.DataFrame(se.data)    

            columns_name = ['contentid','contenttypeid','deaf','visual_impaired','mobility_weak', 'old', 'infant','searchcount']
            for name in columns_name:
                data[name] = data[name].apply(lambda x: int(float(x)))

            type_data = data[data['contenttypeid'] == int(spot_id)] 

            target_data = data[data['contentid'] == contentid] 
            
            # 무장애 여부
            Barrier_data = Barrier_filter(deaf,visual_impaired, mobility_weak, old, infant, type_data, target_data)

            # 인기 관광지 여부 
            recommend_tour = popular_filter(is_popular, Barrier_data, target_data)

            # 추천 결과 
            result_data = pd.DataFrame()
            for i in recommend_tour:
                target_data = data[data['title'] == i[0]]
                result_data = pd.concat([result_data,target_data])
            print(result_data)
            # firstimage 추가해야함!,is liked 여부도! 
            selected_column = result_data[['contentid','contenttypeid', 'title','searchcount','deaf','visual_impaired','mobility_weak', 'old', 'infant']]
            dict_data = selected_column.to_dict(orient='records')
            return JsonResponse({'contents' : dict_data }, status=status.HTTP_200_OK, safe=False)
        
        except Exception as e:
            print('error')
    
    return JsonResponse({'message': 'spot_list error'}, status=status.HTTP_404_NOT_FOUND)



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
        recommend_tour = tfidf_matrix(target_data['title'].values[0], popular_index_reset)
    else:
        print("인기관광지 아님!!==========================")
        concat_data = pd.concat(objs=[data, target_data], axis=0, ignore_index=True)
        no_popular_index_reset = concat_data.reset_index(drop=True)
        recommend_tour = tfidf_matrix(target_data['title'].values[0], no_popular_index_reset)

    return recommend_tour


# 무장애 필터 
def Barrier_filter(deaf, visual_impaired,mobility_weak,old,infant, data, target_data):
    print(deaf, visual_impaired,mobility_weak,old,infant)
    Barrier_data = data[(data['deaf'] >= deaf) & (data['visual_impaired'] >= visual_impaired) & (data['mobility_weak'] >= mobility_weak) & (data['old'] >= old) & (data['infant'] >= infant) ].reset_index(drop= True)

    return Barrier_data



