from django.db.models import *
from helpers.password import hash_password, check_password

class User(Model):
    first_name = CharField(max_length=50)
    last_name = CharField(max_length=50)
    email = EmailField(unique=True)
    password = CharField(max_length=100)
    is_active = True

    @staticmethod
    def authorize(email, password):
        user = User.objects.filter(email=email).first()

        if not user:
            return None

        if not check_password(password, user.password):
            return None

        return user
    
    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.password = hash_password(self.password)

        return super().save(*args, **kwargs)

    def __str__(self):
        return self.full_name
