from .models import Girl
from .serializers import GirlSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import  IsAdminUser
from rest_framework.views import APIView


class GirlViewSet(viewsets.ModelViewSet):
    queryset = Girl.objects.all()
    serializer_class = GirlSerializer
    

class GirlRegisterView(APIView):
    permission_classes = [IsAdminUser]
      
    def post(self, request):        
        serializer = GirlSerializer(data=request.data)       
        if serializer.is_valid():                
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
