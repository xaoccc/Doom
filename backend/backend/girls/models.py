from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Girl(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(validators=[
            MinValueValidator(18),
            MaxValueValidator(70)
        ])
    bio = models.TextField(blank=True, null=True)
    height = models.IntegerField(validators=[
            MinValueValidator(120),
            MaxValueValidator(200)
        ])
    skin_color = models.CharField(max_length=50)
    hair_color = models.CharField(max_length=50)
    eye_color = models.CharField(max_length=50)
    image = models.URLField()


    def __str__(self):
        return self.name
