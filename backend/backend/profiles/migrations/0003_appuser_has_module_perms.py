# Generated by Django 5.1.1 on 2024-10-02 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_appuser_is_superuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='has_module_perms',
            field=models.BooleanField(default=False),
        ),
    ]