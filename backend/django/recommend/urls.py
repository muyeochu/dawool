from rest_framework import routers
from django.conf.urls import url 
from . import views


app_name = 'recommend'
urlpatterns = [
    url(r'^tour/list/(?P<Page>\d*)/$', views.tour_list),
]

