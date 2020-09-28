from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MessageAPIView

router = DefaultRouter()
router.register("", MessageAPIView)

urlpatterns = [
    path("", include(router.urls))
]
