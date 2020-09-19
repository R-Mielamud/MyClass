from rest_framework.viewsets import ModelViewSet
from .models import Class
from .serializers import ClassSerializer

class ClassAPIView(ModelViewSet):
    serializer_class = ClassSerializer
    queryset = Class.objects.all()
