from django.db import models

class Service(models.Model):
    imageUrl = models.URLField(max_length=300, blank=True, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField()