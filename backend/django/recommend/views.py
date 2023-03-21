from rest_framework.viewsets import ModelViewSet
from .models import RecommendTour
from .serializers import RecommendTourSerializer
from recommend.decorators import request_converting_to_object_id

class RecommendTourList(ModelViewSet):
    queryset = RecommendTour.objects.all()
    serializer_class = RecommendTourSerializer

    # object id로 1개만 가져오기
    @request_converting_to_object_id
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(self, request, args, kwargs)

