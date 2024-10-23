from .models import Event
from rest_framework import serializers
from datetime import time

class EventSerializer(serializers.ModelSerializer):
    # formatted_time = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = '__all__'

    # def get_formatted_time(self, obj):
    #     # Format the time for output (HH:mm)
    #     return obj.time.strftime('%H:%M') if obj.time else None

    # def create(self, validated_data):
    #     # Handle incoming data, potentially parsing time if needed
    #     # Example: if you expect time in "HH:mm" format from the client
    #     time_str = validated_data.pop('time', None)
    #     if time_str:
    #         hour, minute = map(int, time_str.split(':'))
    #         validated_data['time'] = time(hour, minute)

    #     return super().create(validated_data)

    # def update(self, instance, validated_data):
    #     # Similar to create, handle time format during updates
    #     time_str = validated_data.pop('time', None)
    #     if time_str:
    #         hour, minute = map(int, time_str.split(':'))
    #         validated_data['time'] = time(hour, minute)

    #     return super().update(instance, validated_data)