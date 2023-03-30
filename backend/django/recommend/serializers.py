from rest_framework import serializers
from .models import RecommendTour


class RecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecommendTour
        fields = [ '_id','title','keyword_result','searchcount','areacode','contentid','contenttypeid','addr1','deaf','visual_impaired','infant','mobility_weak','old','firstimage','location']



class PopularTourSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecommendTour
        fields = [ 'title','contentid','contenttypeid','firstimage','areacode']


