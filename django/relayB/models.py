from django.db import models

class Photo(models.Model):
    source = models.CharField(max_length=255)
    tag = models.CharField(max_length=255, null=True)