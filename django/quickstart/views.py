from django.shortcuts import render, get_object_or_404
from . import serializers
from .serializers import DiarySerializer
# from .models import Diary, Photo, Upload, UploadForm
from .models import Diary, Photo, UploadForm, Upload
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# from .keyword import mkKeywords
from .keyword import Keyword
import json
import requests, os, sys


# relay A

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

# relay B

def showPhotoList(request):
    photo_list = Photo.objects.all()
    context = {
        'photo_list': photo_list,
    }
    # photo_list = serializers.serialize('json', posts)
    # return JsonResponse(context, safe=False)
    
    # return HttpResponse(photo_list, content_type="text/json-comment-filtered")
    # ctx = json.dumps(context)
    # print(type(ctx))
    return render(request, 'quickstart/photo-list.html', context)

def show_photo(request, pk):
    photo = get_object_or_404(Photo, pk=pk)
    context = {
        'photo' : photo,
    }
    # return JsonResponse(context, safe=False)
    # context2 = json.dumps(context)
    # print(type(context2))
    return render(request, 'quickstart/photo.html', context)
    # return HttpResponse(photo_list, content_type="text/json-comment-filtered")




class ImageUpload(APIView):
     @staticmethod
     @method_decorator(csrf_exempt)
     def post(request) :
        print (request.FILES)
        img = UploadForm(request.POST, request.FILES)
        print (img)

        if img.is_valid():
            img.save()
            return HttpResponse("create!")
        else :
            return HttpResponse("fail!")


            # client_id = "2b3i4jqwr1"
            # client_secret = "f6jT0E8NUhisdoIGy5LhNyCBWGxC7Uamc7bNZgCQ"
            # url = "https://naveropenapi.apigw.ntruss.com/vision-obj/v1/detect"
            # files = {'image': open(img, 'rb')}
            # headers = {'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret }
            # response = requests.post(url,  files=files, headers=headers)
            # rescode = response.status_code
            # if(rescode==200):
            #     data =  (response.text)
            #     predictions = data['predictions']
            #     for prediction in predictions:
            #         tag = prediction['detection_names']
            #     tag = set(tag)
            #     tags = ','.join(tag)

            #     return render(request, 'quickstart/upload.html')
            # else:
            #     print("Error Code:" + rescode)






