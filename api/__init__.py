from flask import Flask
from api.models import db
from .login.loginroutes import login




def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///pickabook.db"


    db.init_app(app)
    
    app.register_blueprint(login)

    return app