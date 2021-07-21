import os
from dotenv import load_dotenv

load_dotenv()

print(os.environ.get('SQLALCHEMY_DATABASE_URI'))

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_ECHO = True
    SERVER_NAME = "127.0.0.1:5000"
    # SECRET_KEY =