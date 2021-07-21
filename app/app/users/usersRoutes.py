from flask import Blueprint, json, request, jsonify
from app.models import User
from app import db


users = Blueprint('users', __name__)


@users.route('/signup', methods=['POST'])
def signup():
    request_data = json.loads(request.data)

    password=request_data['password']
    username=request_data['username']
    email=request_data['email']

    # passwordHash = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(username=username,
                email=email,
                password=password)
    
    userE = User.query.filter_by(email=email).first()
    userU = User.query.filter_by(username=username).first()

    if userE:
        print(userE)
        return {"404" : "Sorry!, This email is already in use!"}
    if userU:
        print("userU")
        return {"404" : "Sorry!, This username already exists!"}

    print("Nothing")
    db.session.add(user)
    db.session.commit()

    return {"200" : "Account created succesfully"}





@users.route('/login', methods=['POST'])
def login():
    request_data = json.loads(request.data)

    password=request_data['password']
    email=request_data['email']

    userE = User.query.filter_by(email=email, password=password).first()
    # print(userE)
    if not userE:
        return {"404" : "Incorrect email/password"}


    return {"200" : "Welcome!"}
