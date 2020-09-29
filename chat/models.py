from django.db.models import *
from authorization.models import User
from class_channels.models import Channel
import datetime


class Message(Model):
    author = ForeignKey(to=User, on_delete=CASCADE,
                        related_name="written_messages")
    channel = ForeignKey(to=Channel, on_delete=CASCADE,
                         related_name="messages")
    text = TextField(max_length=1000)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(blank=True, null=True)

    def __str__(self):
        return "Message in {} by {}".format(self.channel.name, self.author.full_name)

    def save(self, *args, **kwargs):
        if self.pk:
            self.updated_at = datetime.datetime()

        return super().save(*args, **kwargs)
