from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RegisterView, CustomTokenObtainPairView

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/user/register/', RegisterView.as_view(), name='register'),
    path('api/user/login/', CustomTokenObtainPairView.as_view(), name='login'),
]