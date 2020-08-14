from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    # path('test/', views.showList),
    path('photo/', views.showPhotoList, name='show_photo_list'),
    path('photo/<int:pk>/', views.show_photo, name='show_photo'),
    path('diary/', views.DiaryView.as_view()),
    path("nlp/",views.NLPView.as_view()),
    path("photo/upload/", views.ImageUpload.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)