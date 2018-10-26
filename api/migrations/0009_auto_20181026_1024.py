# Generated by Django 2.1.2 on 2018-10-26 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20181026_1021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='calendar_api_key',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='calendar_api_token',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='git_api_key',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='project_chat_link',
            field=models.URLField(default=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='slack_api_key',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
