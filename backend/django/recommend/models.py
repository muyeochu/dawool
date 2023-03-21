from djongo import models


class RecommendTour(models.Model):
    _id=models.ObjectIdField()
    contentid=models.TextField()
    contenttypeid=models.TextField()
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
    deaf=models.TextField()
    old= models.TextField()
    visual_impaired=models.TextField()
    mobility_weak = models.TextField()
    infant=models.TextField()
    keyword_result=models.TextField()
    searchcount=models.TextField()


    class Meta:
        db_table = "recommend_tour"


