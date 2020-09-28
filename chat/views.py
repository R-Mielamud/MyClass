from rest_framework.viewsets import ModelViewSet
from .models import Message
from .serializers import MessageSerializer
from django.http import JsonResponse
from MyClass import settings
from channels.models import Channel


class MessageAPIView(ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

    def list(self, request):
        channelid = request.GET.get("channelid")
        part = request.GET.get("part", 0)

        if part is not None:
            try:
                part = int(part)
            except:
                return JsonResponse({
                    "message": "Invalid part"
                }, status=400)

        try:
            channelid = int(channelid)
        except:
            return JsonResponse({
                "message": "Channel id invalid"
            }, status=400)

        messages = self.queryset.filter(channel__pk=channelid).order_by(
            "-id")[part * settings.MESSAGES_COUNT_PER_PART:settings.MESSAGES_COUNT_PER_PART][::-1]
        serialized = self.serializer_class(messages, many=True)
        return JsonResponse(serialized.data, safe=False)

    def create(self, request, *args, **kwargs):
        reject_no_channel = JsonResponse({
            "message": "No channel found"
        }, status=404)

        channelid = request.data.get("channel")

        try:
            channelid = int(channelid)
        except:
            return reject_no_channel

        channel_object = Channel.objects.filter(
            pk=channelid).first()

        request.data.pop("channel", None)

        if not channel_object:
            return reject_no_channel

        result = self.queryset.create(
            **request.data, channel=channel_object, author=request.user)

        serialized = self.serializer_class(result)
        return JsonResponse(serialized.data)
