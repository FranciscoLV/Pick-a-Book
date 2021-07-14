from flask import Blueprint
from api.models import db

login = Blueprint('login', __name__)

# @login.route('/login')
# def index():
#     # db.session.commit()
#     return {'204': 'deleted successfully'}