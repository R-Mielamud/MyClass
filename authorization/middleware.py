from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse
from .models import User
from helpers.jwt import extract_user_token, verify_user_token
from MyClass import settings

class ExtractJWT(MiddlewareMixin):
    def process_request(self, request):
        token = extract_user_token(request)
        setattr(request, "jwt_token", token)

class SetUser(MiddlewareMixin):
    def reject(self, message="Not authorized"):
        return JsonResponse({
            "message": message,
        }, status=401)

    def process_request(self, request):
        if request.path.startswith("/api") and request.path not in settings.JWT_ROUTE_WHITE_LIST:
            if not request.jwt_token:
                return self.reject()

            user_id = verify_user_token(request.jwt_token)

            try:
                user = User.objects.get(pk=user_id)
                setattr(request, "user", user)
            except:
                return self.reject("No such user")
