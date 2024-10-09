from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import AppUser
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.core.mail import send_mail, BadHeaderError
from django.template.loader import render_to_string
import logging
from backend.settings import EMAIL_HOST_USER
from django.core.mail import send_mail

def send_register_email(user_email):
    try:
        subject = 'Successful Registration!'
        html_message = render_to_string('registration_email.html', {})
        message = 'Thank you for joining our app. Enjoy your stay. We hope you find what you are looking for.'
        email_from = EMAIL_HOST_USER
        recipient_list = [user_email]
        send_mail(subject, message, email_from, recipient_list, html_message=html_message)

    except BadHeaderError:
        logging.error("Invalid header found.")
    except Exception as e:
        logging.error(f"Error sending email: {str(e)}")
        print(f"Error: {str(e)}")

def send_email(data):
    try:
        subject = f"Message from {data['userName']}"
        message = f"Message: {data['message']}.\nYou can reply to {data['email']}"
        email_from = data['email']
        recipient_list = [EMAIL_HOST_USER]
        send_mail(subject, message, email_from, recipient_list)

    except BadHeaderError:
        logging.error("Invalid header found.")
    except Exception as e:
        logging.error(f"Error sending email: {str(e)}")
        print(f"Error: {str(e)}")

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data["is_staff"] = self.user.is_staff
        return data


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    

class UserViewSet(viewsets.ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer
    

class RegisterView(APIView):
    permission_classes = [AllowAny]
      
    def post(self, request):        
        serializer = UserSerializer(data=request.data)       
        if serializer.is_valid():   
             
            serializer.save()
            send_register_email(AppUser.objects.last().email)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class SendEmailView(APIView):
    permission_classes = [AllowAny]    
    
    def post(self, request):        
        send_email(request.data)
        return Response({'message': 'Email sent'}, status=status.HTTP_200_OK)

    



