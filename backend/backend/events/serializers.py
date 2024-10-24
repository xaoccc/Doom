from .models import Event
from rest_framework import serializers
from datetime import time

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'
