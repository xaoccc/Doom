from django.urls import path
from .views import EventViewSet, EventRegisterView

urlpatterns = [
    path('', EventViewSet.as_view({'get': 'list'})),
    path('create/', EventRegisterView.as_view(), name='event_register'),
    path('<str:pk>/', EventViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]