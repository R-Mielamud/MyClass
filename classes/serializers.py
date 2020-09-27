from rest_framework.serializers import *
from .models import Class
from authorization.serializers import UserSerializer
from channels.serializers import ChannelSerializer


class ClassSerializer(ModelSerializer):
    teachers = UserSerializer(many=True)
    students = UserSerializer(many=True)
    channels = ChannelSerializer(many=True)

    class Meta:
        model = Class
        fields = "__all__"
