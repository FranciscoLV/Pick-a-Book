from flask import Blueprint, request, json
from api.models import User, db

signup = Blueprint('signup', __name__)


@signup.route('/signup/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    user = User(content=request_data['content'])

    db.session.add(User)
    db.session.commit()

    return {'201': 'todo create successfully'} 