from flask import Blueprint, json, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from app.models import User
from app import db, jwt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
# get jwt identity and curret user work similar
# use decorater @jwt_required for private routes



users = Blueprint('users', __name__)


@users.route('/signup', methods=['POST'])
def signup():
    request_data = json.loads(request.data)

    username=request_data['username']
    email=request_data['email']
    password=request_data['password']
    
    userE = User.query.filter_by(email=email).first()
    userU = User.query.filter_by(username=username).first()

    if userE:
        return jsonify({"message" : "Sorry!, This email is already in use!"}), 401
    if userU:
        return jsonify({"message" : "Sorry!, This username already exists!"}), 402


    user = User(username=username,
            email=email,
            password=generate_password_hash(password))

    db.session.add(user)
    db.session.commit()

    # access_token = create_access_token(identity = user.id)

    return jsonify({'message': 'Welcome {}, your account has been created!'.format(user.username)}), 200




@users.route('/login', methods=['POST'])
def login():
    request_data = json.loads(request.data)

    email=request_data['email']
    password=request_data['password']

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"message" : "Account does not exist!"}), 401
    elif not check_password_hash(user.password, password):
        return jsonify({"message" : "Incorrect password!"}), 402

    access_token = create_access_token(identity = user.id)
    return jsonify({'message': 'Logged in as {}'.format(user.username), 'token': access_token}), 200

# @users.route("/who_am_i", methods=["GET"])
# @jwt_required
# def protected():
#     return jsonify(
#         id=current_user.id,
#         email=current_user.email,
#         username=current_user.username,
#     )

@users.route("/protected", methods=["GET"])
@jwt_required()
def get_user():
    currentUser = get_jwt_identity()
    user = User.filter.get(currentUser)
    return jsonify(id=user.id, email=user.email, username=user.username), 200
    # return jsonify({"id" : user.id, "email" : user.email, "username" : user.username}), 200
