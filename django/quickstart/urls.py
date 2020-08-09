from django.urls import path, include
from . import views

urlpatterns = [
    path('diary/', views.DiaryView.as_view()),
    path("nlp/",views.NLPView.as_view())
]