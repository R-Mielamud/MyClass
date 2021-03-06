# Generated by Django 3.0.6 on 2020-09-26 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authorization', '0001_initial'),
        ('classes', '0003_auto_20200919_1148'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='join_key_teacher',
            field=models.SlugField(blank=True, max_length=12),
        ),
        migrations.AlterField(
            model_name='class',
            name='students',
            field=models.ManyToManyField(
                default=[], related_name='studying_classes', to='authorization.User'),
        ),
        migrations.AlterField(
            model_name='class',
            name='teachers',
            field=models.ManyToManyField(
                default=[], related_name='teaching_classes', to='authorization.User'),
        ),
    ]
