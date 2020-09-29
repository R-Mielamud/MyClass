from django.urls import path, include

urlpatterns = [
    path("class/", include("classes.urls")),
    path("auth/", include("authorization.urls")),
    path("channel/", include("class_channels.urls")),
    path("message/", include("chat.urls"))
]
