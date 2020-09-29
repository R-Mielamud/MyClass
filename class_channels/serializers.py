from rest_framework.serializers import ModelSerializer
from .models import Channel
from authorization.serializers import UserSerializer
from chat.serializers import MessageSerializer


class ChannelSerializer(ModelSerializer):
    creator = UserSerializer()
    members = UserSerializer(many=True)
    messages = MessageSerializer(many=True)

    class Meta:
        model = Channel
        fields = "__all__"
