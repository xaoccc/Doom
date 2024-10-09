from django.urls import path, include
from .views import ServiceViewSet, ServiceRegisterView

urlpatterns = [
    path('services/', ServiceViewSet.as_view({'get': 'list'})),
    path('services/create/', ServiceRegisterView.as_view(), name='service_register'),
    path('services/<str:pk>/', ServiceViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]