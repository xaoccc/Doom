# Generated by Django 5.1.1 on 2024-11-11 10:22

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('escaperooms', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='escaperoom',
            name='rating',
            field=models.DecimalField(blank=True, decimal_places=1, max_digits=2, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
    ]