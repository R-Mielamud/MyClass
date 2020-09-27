from rest_framework.viewsets import ModelViewSet
from .models import Class
from .serializers import ClassSerializer
from django.http import JsonResponse


class ClassAPIView(ModelViewSet):
    serializer_class = ClassSerializer

    def list(self, request, *args, **kwargs):
        result = Class.objects.filter(students__id=request.user.id) | Class.objects.filter(
            teachers__id=request.user.id)
        serialized = self.serializer_class(result, many=True)
        return JsonResponse(serialized.data, safe=False)

    def create(self, request, *args, **kwargs):
        result = Class.objects.create(
            **request.data)
        result.teachers.set([request.user])
        serialized = self.serializer_class(result)
        return JsonResponse(serialized.data)
