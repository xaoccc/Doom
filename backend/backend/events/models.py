from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    price = models.PositiveIntegerField(validators=[MaxValueValidator(1000)])
    location = models.CharField(max_length=100)    
    imageUrl = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
