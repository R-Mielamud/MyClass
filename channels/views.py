from rest_framework.viewsets import ModelViewSet
from .serializers import ChannelSerializer
from classes.models import Class
from .models import Channel
from django.http import JsonResponse


class ChannelAPIView(ModelViewSet):
    serializer_class = ChannelSerializer

    def list(self, request):
        class_id = request.GET.get("classid")

        try:
            class_object = Class.object.get(pk=class_id)
        except:
            return JsonResponse({
                "message": "Class does not exist",
            })

        channels = class_object.channels
        serialized = self.serializer_class(channels, many=True)
        return JsonResponse(serialized.data, safe=False)
