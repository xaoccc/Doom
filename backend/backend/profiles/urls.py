from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RegisterView, CustomTokenObtainPairView, SendEmailView

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/user/register/', RegisterView.as_view(), name='register'),
    path('api/user/login/', CustomTokenObtainPairView.as_view(), name='login'),
    path('api/user/view/<str:email>/', UserViewSet.as_view({'get': 'retrieve_by_email'}), name='view_user'),
    path('api/user/edit/<int:id>/', UserViewSet.as_view({'put': 'update_by_email'}), name='edit_user'),
    path('sendemail/', SendEmailView.as_view(), name='send_email'),
]