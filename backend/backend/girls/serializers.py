from .models import Girl
from rest_framework import serializers


class GirlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Girl
        fields = '__all__'