from django.urls import path, include
from .views import LoginView, RegisterView, ProfileView

urlpatterns = [
    path("login/", LoginView.as_view()),
    path("register/", RegisterView.as_view()),
    path("profile/", ProfileView.as_view()),
]
