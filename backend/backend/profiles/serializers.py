from .models import AppUser
from rest_framework import serializers
from django.conf import settings


class UserSerializer(serializers.ModelSerializer):
    # profile_picture = serializers.SerializerMethodField()

    # def get_profile_picture(self, obj):
    #     request = self.context.get("request") 
    #     if obj.profile_picture:
    #         return request.build_absolute_uri(obj.profile_picture.url) 
    #     return None
    
    class Meta:
        model = AppUser
        fields = ['id', 'email', 'password', 'age', 'is_staff', 'profile_picture', 'first_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = AppUser.objects.create_user(**validated_data)
        return user
    
