from django.contrib.auth.models import User, Group
from .models import Diary
from rest_framework import serializers


class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = ('title','content')
