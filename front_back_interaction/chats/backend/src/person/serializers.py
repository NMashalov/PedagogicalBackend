from rest_framework.serializers import Serializer, ModelSerializer, CharField
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializer(ModelSerializer):
     class Meta:
         model = User
         fields = ['username', 'first_name', 'last_name', 'email', 'date_joined']


class LoginRequestSerializer(Serializer):
    model = User

    username = CharField(required=True)
    password = CharField(required=True)

