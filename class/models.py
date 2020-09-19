from django.db.models import *
from helpers.generate_class_key import generate_class_key
from helpers.generate_random_color import generate_random_color
from helpers.generate_random_string import generate_random_string

class Class(Model):
    key = CharField(max_length=20, blank=True)
    name = CharField(max_length=50)
    color = CharField(max_length=7, blank=True)
    avatar = ImageField(blank=True, null=True)
    # teachers = ManyToManyField(to=User, on_delete="CASCADE", related_name="classes")
    # students = ManyToManyField(to=User, on_delete="CASCADE", related_name="classes")
    join_key = SlugField(max_length=8, blank=True)
    description = TextField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return "{} ({})".format(self.name, self.key)

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.key = generate_class_key(self.name)
            self.join_key = generate_random_string(8)
            self.color = generate_random_color()

        return super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "classes"
