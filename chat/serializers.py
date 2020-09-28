from rest_framework.serializers import ModelSerializer
from .models import Message
from authorization.serializers import UserSerializer


class MessageSerializer(ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Message
        fields = "__all__"
