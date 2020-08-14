from django.contrib.auth.models import User, Group
from .models import Diary, Photo
from rest_framework import serializers


class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = ('title','content')

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('source', 'time', 'tag')