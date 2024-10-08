from django.urls import path, include
from .views import ServiceViewSet

urlpatterns = [
    path('services/', ServiceViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('services/<str:pk>/', ServiceViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]