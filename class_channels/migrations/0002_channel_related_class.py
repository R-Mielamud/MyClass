# Generated by Django 3.0.6 on 2020-09-27 15:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0005_class_text_color'),
        ('class_channels', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='channel',
            name='related_class',
            field=models.ForeignKey(
                blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='channels', to='classes.Class'),
        ),
    ]
