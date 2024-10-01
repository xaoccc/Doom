# Doom
1. How to run this app on Windows:
    - Setup the backend:
        - Install Visual Studio Code v1.93 or other IDE of your choice
        - Install Python v3.11
        - Install PostgreSQL 16.4  
        - Check the version of python `python --version`. If it shows version 3.11 everything is OK, if not - add python path in the environmental variables. More info here: https://www.mygreatlearning.com/blog/add-python-to-path/ 
        - Create Python virtual environment: `python -m venv env`
        - Activate the virtual environment: `.\env\Scripts\Activate`
        - Install the necessary prerequisites to run the backend: `pip install -r requirments.txt`

    - Setup the front-end:
        - Install Node.JS 20.11
        - Setup React, Vite and the necessary packages:
        `npm create vite@latest frontend -- --template react`  
        `cd frontend`  
        `npm install`  
        `npm install axios react-router-dom jwt-decode` 
    
    - Apply the contents from folders frontend and backend to your 

    - Run the servers:
        - Front-end server: `npm run dev`  
        - Backend server: `python manage.py runserver` 

    Notes: Versions mentioned are the oldest possible. Newer versions should be ok as well (I suppose). Prerequisites and their versions are optional, but the app may not run properly if some of them are missing or the versions are not correct.

2. Features:
    - Log In, Register, Log Out
