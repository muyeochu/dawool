from rest_framework import routers
from django.urls import path
from . import views

router = routers.SimpleRouter()
router.register('tour_list', views.RecommendTourList)

app_name = 'recommend'
urlpatterns = [

]

urlpatterns += router.urls

