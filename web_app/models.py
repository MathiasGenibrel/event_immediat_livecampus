from django.db import models


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.IntegerField()
    end_date = models.DateField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.name
