from rest_framework.viewsets import ModelViewSet
from .serializers import ChannelSerializer
from classes.models import Class
from .models import Channel
from django.http import JsonResponse


class ChannelAPIView(ModelViewSet):
    serializer_class = ChannelSerializer
    queryset = Channel.objects.all()

    def list(self, request):
        class_id = request.GET.get("classid")

        try:
            class_id = int(class_id)
        except:
            return JsonResponse({
                "message": "Class id invalid",
            }, status=404)

        channels = self.queryset.filter(related_class__pk=class_id)
        serialized = self.serializer_class(channels, many=True)
        return JsonResponse(serialized.data, safe=False)
