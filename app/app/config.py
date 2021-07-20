import os
from dotenv import load_dotenv

load_dotenv()

print(os.environ.get('SQLALCHEMY_DATABASE_URI'))

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_ECHO = True
    # SECRET_KEY =