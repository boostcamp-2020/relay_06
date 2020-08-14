from django.contrib import admin
from .models import Diary


# Register your models here.
class DiaryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'content']

admin.site.register(Diary, DiaryAdmin)