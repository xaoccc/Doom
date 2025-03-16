from django.urls import path
from .views import GirlViewSet, GirlRegisterView

urlpatterns = [
    path('', GirlViewSet.as_view({'get': 'list'})),
    path('create/', GirlRegisterView.as_view(), name='service_register'),
    path('<str:pk>/', GirlViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
]