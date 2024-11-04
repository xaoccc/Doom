from django.test import TestCase
from .models import AppUser
from .views import RegisterView
from django.urls import reverse
from pprint import pprint
import json


class AppUserModelTest(TestCase):
    def setUp(self):
        self.app_user = AppUser.objects.create(email='pesho@pesho.com', password='Parola123')

    def test_app_user_creation(self):
        self.assertEqual(self.app_user.email, "pesho@pesho.com")
        self.assertEqual(self.app_user.password, "Parola123")
        self.assertIsInstance(self.app_user, AppUser)


class AppUserViewTest(TestCase):
    def setUp(self):
        self.user = AppUser.objects.create_user(email='ivan@ivan.com', password='Parola123', age=25)
        

    def test_register_user_get_request(self):
        response = self.client.get(reverse('register'))
        self.assertEqual(response.status_code, 405)

    def test_register_user_post_request_wrong_JSON_format(self):
        response = self.client.post(reverse('register'), {
            'email': 'ivan@ivan.com',
            'password': 'Parola123',
            'age': '25'
        })
        self.assertEqual(response.status_code, 400)

    def test_register_user_post_request_valid_JSON_existing_email(self):
        response = self.client.post(reverse('register'), {
            'email': 'ivan@ivan.com',
            'password': 'Parola123',
            'age': '25'
        })
        self.assertEqual(response.status_code, 400)

    def test_register_user_post_request_valid(self):
        response = self.client.post(reverse('register'), {
            "email": "pesho@ivan.com",
            "password": "Parola123",
            "age": "25"
        })
        test_email = 'pesho@ivan.com'
        self.assertEqual(response.status_code, 201, msg="Registration failed: Expected status code 201 but got {}".format(response.status_code))
        self.assertTrue(AppUser.objects.filter(email=test_email).exists(), msg=f"Registration failed: Email {test_email} was not found in the database")

    def test_login_user_post_request_no_password_provided(self):
        response = self.client.post(
            reverse('login'),
            data=({
                "email": "ivan@ivan.com"
            }),
        )
        self.assertEqual(json.loads(response.content.decode('utf-8'))['password'][0], 'This field is required.' , msg=f"Expected 'This field is required.', got {response.content}")
    
    def test_login_user_post_request_no_email_provided(self):
        response = self.client.post(
            reverse('login'),
            data=({
                "password": "Parola123"
            }),
        )
        self.assertEqual(json.loads(response.content.decode('utf-8'))['email'][0], 'This field is required.' , msg=f"Expected 'This field is required.', got {response.content}")
    
    def test_login_user_post_request_valid(self):
        response = self.client.post(
            reverse('login'),
            data=({
                "email": "ivan@ivan.com",
                "password": "Parola123"
            }),
        )
        self.assertEqual(response.status_code, 200  , msg=f"Expected 200, got {response.status_code} - {response.json() if response.headers['Content-Type'] == 'application/json' else response.content}")



