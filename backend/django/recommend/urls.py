from django.conf.urls import url 
from . import views


app_name = 'recommend'
urlpatterns = [
    url(r'^spot/(?P<spot_id>\d+)', views.spot_list),
    url('restaurant/', views.food_list),
]

