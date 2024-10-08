from django.db import models

class Service(models.Model):
    imageUrl = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()