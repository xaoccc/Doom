from django.urls import path
from .views import EscapeRoomViewSet, EscapeRoomRegisterView

urlpatterns = [
    path('', EscapeRoomViewSet.as_view({'get': 'list'})),
    path('create/', EscapeRoomRegisterView.as_view(), name='service_register'),
    path('<str:pk>/', EscapeRoomViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]