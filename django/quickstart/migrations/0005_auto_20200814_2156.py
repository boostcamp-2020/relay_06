# Generated by Django 3.1 on 2020-08-14 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0004_auto_20200814_2132'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ImageUpload',
        ),
        migrations.DeleteModel(
            name='Post',
        ),
        migrations.AlterField(
            model_name='photo',
            name='source',
            field=models.ImageField(upload_to='post_images'),
        ),
    ]
