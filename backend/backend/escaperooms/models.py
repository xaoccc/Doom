from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class EscapeRoom(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    imageUrl = models.URLField(max_length=300, blank=True, null=True)
    difficulty = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    rating = models.DecimalField(max_digits=2, decimal_places=1, validators=[MinValueValidator(1), MaxValueValidator(10)], null=True, blank=True)
    duration = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(300)])
    price = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name