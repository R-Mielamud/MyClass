from django.db.models import *
from authorization.models import User


class Channel(Model):
    name = CharField(max_length=50)
    # messages =
    members = ManyToManyField(to=User, related_name='channels')
    creator = ForeignKey(
        to=User, related_name='admin_channels', on_delete=CASCADE)
