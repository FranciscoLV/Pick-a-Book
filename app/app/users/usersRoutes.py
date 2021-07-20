from flask import Blueprint, json, request
from app.models import User
from app import db, bcrypt

users = Blueprint('users', __name__)

@users.route('/signup/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)

    password=request_data['password']
    passwordHash = bcrypt.generate_password_hash(password).decode('utf-8')

    user = User(username=request_data['username'],
                email=request_data['email'],
                password=passwordHash)

    db.session.add(user)
    db.session.commit()

    return {'201': 'New user added with success'} 