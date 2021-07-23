from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.config import Config
from flask_jwt_extended import JWTManager


db = SQLAlchemy()
jwt = JWTManager()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)

    from app.users.usersRoutes import users

    app.register_blueprint(users)

    with app.app_context():
        from . import models
        db.create_all()

        return app