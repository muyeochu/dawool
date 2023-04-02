from rest_framework import serializers
from .models import RecommendTour


class RecommendSerializer(serializers.ModelSerializer):
    contentTypeId = serializers.IntegerField(source='contenttypeid')
    contentId = serializers.IntegerField(source='contentid')
    imageUrl= serializers.CharField(source='firstimage')
    areaCode = serializers.IntegerField(source='areacode')

    class Meta:
        model = RecommendTour
        fields = [ '_id','title','keyword_result','searchcount','areaCode','contentId','contentTypeId','addr1','deaf','visual_impaired','infant','mobility_weak','old','imageUrl','location']



class PopularTourSerializer(serializers.ModelSerializer):
    contentTypeId = serializers.IntegerField(source='contenttypeid')
    contentId = serializers.IntegerField(source='contentid')
    imageUrl= serializers.CharField(source='firstimage')
    areaCode = serializers.IntegerField(source='areacode')

    class Meta:
        model = RecommendTour
        fields = [ 'title','contentId','contentTypeId','imageUrl','areaCode']


