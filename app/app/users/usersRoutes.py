from flask import Blueprint, json, request
from app.models import User
from app import db

users = Blueprint('users', __name__)

@users.route('/', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    user = User(username=request_data['username'],
                email=request_data['email'],
                password=request_data['password'])
    
    db.session.add(user)
    db.session.commit()
    return {'201': 'New user added with success'} 