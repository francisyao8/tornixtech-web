import datetime
from unicodedata import numeric
import uuid
from sqlalchemy import JSON, Column
from config.db import *
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import expression

class Payment_Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    payment_id = db.Column(db.String(128))
    firstname = db.Column(db.String(128))
    lastname = db.Column(db.String(128))
    email = db.Column(db.String(128), unique=False)
    mobile = db.Column(db.String(128))
    country = db.Column(db.String(128))
    city = db.Column(db.String(128))
    projet = db.Column(db.String(128))
    plan_title = db.Column(db.String(128))
    amount = db.Column(db.String(128))
    description = db.Column(JSON)
    order_status = db.Column(db.String(128))
    order_payment_status = db.Column(db.String(128))
    order_payment_confirmation_id = db.Column(db.String(128))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    updated_on = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
