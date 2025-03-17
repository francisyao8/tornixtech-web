from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask import Flask, render_template
import os
from flask_restful import Resource, Api
from config.db import db
from config.constant import *
from model.tornixtech import *

from flask_migrate import Migrate
from flask import Flask
from flask_cors import CORS

from ressources.Payment_Services import PaymentServicesApi

app = Flask(__name__)

CORS(app)

app.config['JWT_SECRET_KEY'] = 'super-secret'
jwt = JWTManager(app)

app.secret_key = os.urandom(24)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = SQL_DB_URL
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db.init_app(app)

migrate = Migrate(app, db)
api = Api(app)

api.add_resource(PaymentServicesApi, '/api/Payment_Services/<string:route>', endpoint='all_payment', methods=['GET', 'POST', 'DELETE', 'PATCH'])

@app.route('/')
def home():
    return "Welcome to Tornixtech!"

if __name__ == '__main__':
    app.run(debug=True,  host="0.0.0.0")  