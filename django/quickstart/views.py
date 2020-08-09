from django.shortcuts import render
from .serializers import DiarySerializer
from .models import Diary
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# from .keyword import mkKeywords
 from .keyword import Keyword
import json



class DiaryView(APIView):
    @staticmethod
    @method_decorator(csrf_exempt)
    def post(request):  # post request를 처리하는 함수
        serializer = DiarySerializer(data=request.data)  # 받아온 데이터를 serializer에 저장
        if serializer.is_valid():
            serializer.save()   # 데이터베이스에 저장
        return HttpResponse("create!")

class NLPView(APIView):
    @staticmethod
    @method_decorator(csrf_exempt)
    def post(request):
        texts = request.data['content']
        jsonData = Keyword([texts])
        return JsonResponse(jsonData, safe=False)


    