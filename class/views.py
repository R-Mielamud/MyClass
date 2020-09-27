from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
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


class JoinClassView(APIView):
    serializer_class = ClassSerializer

    def post(self, request, *args, **kwargs):
        join_key = request.data.get("join_key")

        class_object_student = Class.objects.filter(join_key=join_key).first()
        class_object_teacher = Class.objects.filter(
            join_key_teacher=join_key).first()
        class_to_serialize = None

        if class_object_student:
            class_object_student.students.add(request.user)
            class_to_serialize = class_object_student
        elif class_object_teacher:
            class_object_teacher.teachers.add(request.user)
            class_to_serialize = class_object_teacher
        else:
            return JsonResponse({
                "message": "Forbidden. Invalid key"
            }, status=403)

        serialized = self.serializer_class(class_to_serialize)
        return JsonResponse(serialized.data)
