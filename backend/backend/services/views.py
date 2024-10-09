
from .models import Service
from .serializers import ServiceSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import  AllowAny
from rest_framework.views import APIView



class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ServiceRegisterView(APIView):
    permission_classes = [AllowAny]
      
    def post(self, request):        
        serializer = ServiceSerializer(data=request.data)       
        if serializer.is_valid():                
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

