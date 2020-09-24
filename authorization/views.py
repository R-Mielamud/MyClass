from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
from django.http import JsonResponse, HttpResponse
from helpers.jwt import generate_user_token

class LoginView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        user = User.authorize(
            email=request.data.get("email"),
            password=request.data.get("password")
        )

        if not user:
            return JsonResponse({
                "message": "Invalid email or password",
            }, status=403)

        serializer = self.serializer_class(user)
        token = generate_user_token(user.pk)

        return JsonResponse({
            "user": serializer.data,
            "jwt_token": token,
        })

class RegisterView(APIView):
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.create(**request.data)
        except:
            return JsonResponse({
                "message": "This email is already taken",
            }, status=400)
        
        serializer = self.serializer_class(user)
        token = generate_user_token(user.pk)

        return JsonResponse({
            "user": serializer.data,
            "jwt_token": token,
        })

class ProfileView(APIView):
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return JsonResponse(serializer.data)
