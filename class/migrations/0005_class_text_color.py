# Generated by Django 3.0.6 on 2020-09-27 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('class', '0004_auto_20200926_1926'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='text_color',
            field=models.CharField(blank=True, max_length=7),
        ),
    ]