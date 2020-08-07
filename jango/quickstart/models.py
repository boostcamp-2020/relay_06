from django.db import models

# Create your models here.

class Diary(models.Model):
    title = models.CharField(max_length=50)
    ##author = models.ForeignKey('', on_delete=models.SET_NULL,)
    ##date = models.DateField()
    content = models.TextField(null=True)