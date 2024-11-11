from .models import EscapeRoom
from rest_framework import serializers


class EscapeRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = EscapeRoom
        fields = '__all__'