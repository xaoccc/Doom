# Generated by Django 5.1.1 on 2024-11-11 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('escaperooms', '0003_alter_escaperoom_duration'),
    ]

    operations = [
        migrations.AddField(
            model_name='escaperoom',
            name='imageUrl',
            field=models.URLField(blank=True, max_length=300, null=True),
        ),
    ]
