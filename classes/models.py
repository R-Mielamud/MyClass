from django.db.models import *
from authorization.models import User
from helpers.generate_class_key import generate_class_key
from helpers.generate_random_color import generate_random_color
from helpers.generate_random_string import generate_random_string
from helpers.contrast import get_contrast_color


class Class(Model):
    key = CharField(max_length=20, blank=True)
    name = CharField(max_length=50)
    color = CharField(max_length=7, blank=True)
    text_color = CharField(max_length=7, blank=True)
    avatar = ImageField(blank=True, null=True)
    teachers = ManyToManyField(
        to=User, related_name="teaching_classes", blank=True)
    students = ManyToManyField(
        to=User, related_name="studying_classes", blank=True)
    join_key = SlugField(max_length=8, blank=True)
    join_key_teacher = SlugField(max_length=12, blank=True)
    description = TextField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return "{} ({})".format(self.name, self.key)

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.key = generate_class_key(self.name)
            self.join_key = generate_random_string(8)
            self.join_key_teacher = generate_random_string(12)
            self.color = generate_random_color()
            self.text_color = get_contrast_color(self.color)

        return super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "classes"
