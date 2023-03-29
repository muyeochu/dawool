from djongo import models


class RecommendTour(models.Model):
    _id=models.ObjectIdField()
    contentid=models.IntegerField()
    contenttypeid=models.IntegerField()
    title=models.TextField()
    areacode=models.TextField()
    sigungucode=models.TextField()
    cat1=models.TextField()
    cat2=models.TextField()
    cat3=models.TextField()
    addr1=models.TextField()
    zipcode=models.TextField()
    mapx=models.TextField()
    mapy=models.TextField()
    deaf=models.IntegerField()
    old= models.IntegerField()
    firstimage = models.TextField()
    visual_impaired=models.IntegerField()
    mobility_weak = models.IntegerField()
    infant=models.IntegerField()
    keyword_result=models.TextField()
    searchcount=models.IntegerField()
    location = models.JSONField()


    class Meta:
        db_table = "recommend_tour"





