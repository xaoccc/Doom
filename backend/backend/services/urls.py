from django.urls import path, include
from .views import ServiceViewSet, ServiceRegisterView

urlpatterns = [
    path('', ServiceViewSet.as_view({'get': 'list'})),
    path('create/', ServiceRegisterView.as_view(), name='service_register'),
    path('<str:pk>/', ServiceViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]