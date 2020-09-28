from django.urls import path, include

urlpatterns = [
    path("class/", include("classes.urls")),
    path("auth/", include("authorization.urls")),
    path("channel/", include("channels.urls")),
    path("message/", include("chat.urls"))
]
