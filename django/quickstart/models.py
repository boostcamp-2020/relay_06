from django.db import models
from django.forms import ModelForm

# Create your models here.

class Diary(models.Model):
    title = models.CharField(max_length=50)
    ##author = models.ForeignKey('', on_delete=models.SET_NULL,)
    ##date = models.DateField()
    content = models.TextField(null=True)

class Photo(models.Model):
    source = models.ImageField(max_length=255)
    time = models.DateTimeField(auto_now_add=True)
    tag = models.CharField(max_length=255, null=True)

class Upload(models.Model):
    pic = models.FileField(upload_to="images/")    
    upload_date=models.DateTimeField(auto_now_add =True)

# FileUpload form class.
class UploadForm(ModelForm):
    class Meta:
        model = Upload
        fields = ('pic',)

