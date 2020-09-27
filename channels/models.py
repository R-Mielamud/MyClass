from django.db.models import *
from authorization.models import User
from classes.models import Class


class Channel(Model):
    name = CharField(max_length=50)
    # messages =
    related_class = ForeignKey(
        to=Class, on_delete=CASCADE, related_name="channels", blank=True, null=True)
    members = ManyToManyField(to=User, related_name="channels")
    creator = ForeignKey(
        to=User, related_name="admin_channels", on_delete=CASCADE)
