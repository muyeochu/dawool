from rest_framework.viewsets import ModelViewSet
from .models import RecommendTour
from .serializers import RecommendTourSerializer
from recommend.decorators import request_converting_to_object_id
import pandas as pd
from pandas import json_normalize
import json
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from collections import OrderedDict

# class RecommendTourList(ModelViewSet):
#     queryset = RecommendTour.objects.all()
#     serializer_class = RecommendTourSerializer

#     # object id로 1개만 가져오기
#     @request_converting_to_object_id
#     def retrieve(self, request, *args, **kwargs):
#         return super().retrieve(self, request, args, kwargs)

@api_view(['GET'])
def tour_list(request, Page):
    if(request.method == 'GET'):
        try:
            p = int(Page)
            tours = RecommendTour.objects.all()[p*30:(p*30)+30]
            se = RecommendTourSerializer(tours, many=True)
            return JsonResponse({'data' : se.data }, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            print('error')
    return JsonResponse({'message': 'tour_list error'}, status=status.HTTP_404_NOT_FOUND)
