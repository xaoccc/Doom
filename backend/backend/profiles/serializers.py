from .models import AppUser
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['id', 'email', 'password', 'age', 'is_staff', 'profile_picture', 'first_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = AppUser.objects.create_user(**validated_data)
        return user
    
