from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from django.http import JsonResponse, HttpResponse

class LoginView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        user = User.authorize(
            email=request.data.get("email"),
            password=request.data.get("password")
        )

        if not user:
            return JsonResponse({
                "message": "Invalid email or password"
            }, status=403)

        serializer = self.serializer_class(user)
        request.session["user"] = user.pk
        return JsonResponse(serializer.data)

class RegisterView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.create(**request.data)
            request.session["user"] = user.pk
        except:
            return JsonResponse({
                "message": "This email is already taken"
            }, status=400)
        
        serializer = self.serializer_class(user)
        return JsonResponse(serializer.data)

class ProfileView(APIView):
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user_id = request.session.get("user")

        if not user_id:
            return JsonResponse({
                "message": "Not authorized"
            }, status=401)
        
        user = User.objects.get(pk=user_id)
        serializer = self.serializer_class(user)
        return JsonResponse(serializer.data)

class LogoutView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        request.session["user"] = None
        return HttpResponse(status=204)
