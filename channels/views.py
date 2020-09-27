from rest_framework.viewsets import ModelViewSet
from .serializers import ChannelSerializer
from classes.models import Class
from .models import Channel
from django.http import JsonResponse


class ChannelAPIView(ModelViewSet):
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()

    def list(self, request):
        class_id = int(request.GET.get("classid"))

        try:
            class_object = Class.objects.get(pk=class_id)
        except:
            return JsonResponse({
                "message": "Class does not exist",
            }, status=404)

        channels = class_object.channels
        serialized = self.serializer_class(channels, many=True)
        return JsonResponse(serialized.data, safe=False)
