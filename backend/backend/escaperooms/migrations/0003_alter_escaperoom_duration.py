# Generated by Django 5.1.1 on 2024-11-11 10:28

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('escaperooms', '0002_alter_escaperoom_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='escaperoom',
            name='duration',
            field=models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(300)]),
        ),
    ]
