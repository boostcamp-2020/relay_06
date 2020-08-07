from django.urls import path, include

from quickstart import views

urlpatterns = [
    path('diary/', views.DiaryView.as_view())
]