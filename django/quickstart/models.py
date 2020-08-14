from django.db import models
from django.forms import ModelForm

# Create your models here.

class Diary(models.Model):
    title = models.CharField(max_length=50)
    ##author = models.ForeignKey('', on_delete=models.SET_NULL,)
    ##date = models.DateField()
    content = models.TextField(null=True)

class Photo(models.Model):
    id = models.AutoField(primary_key=True, help_text='PK AutoIncrement')
    source = models.ImageField(upload_to='post_images')
    time = models.DateTimeField(auto_now_add=True)
    tag = models.CharField(max_length=255, null=True)

