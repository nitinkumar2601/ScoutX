from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from redis import Redis
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
api = Api(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Redis configuration
redis_client = Redis(
    host=os.getenv('REDIS_HOST', 'localhost'),
    port=int(os.getenv('REDIS_PORT', 6379)),
    db=0
)

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import routes after db initialization to avoid circular imports
from routes import *

if __name__ == '__main__':
    app.run(debug=os.getenv('FLASK_DEBUG', True))