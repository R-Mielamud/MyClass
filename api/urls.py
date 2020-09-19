from django.urls import path, include

urlpatterns = [
    path("class/", include("class.urls"))
]
