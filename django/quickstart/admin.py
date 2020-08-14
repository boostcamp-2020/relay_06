from django.contrib import admin
from .models import Diary, Photo


# Register your models here.
class DiaryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'content']

class PhotoAdmin(admin.ModelAdmin):
    list_display = ['id', 'source', 'time', 'tag']

admin.site.register(Diary, DiaryAdmin)
admin.site.register(Photo, PhotoAdmin)

