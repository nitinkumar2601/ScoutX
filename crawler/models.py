"""
Database models for the crawler
"""
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.url import URL
from crawler import settings

DeclarativeBase = declarative_base()

def db_connect():
    """
    Creates database connection using database settings from settings.py
    """
    return create_engine(URL.create(**settings.DATABASE))

def create_table(engine):
    """
    Creates the table if it doesn't exist
    """
    DeclarativeBase.metadata.create_all(engine)

class CompanySignal(DeclarativeBase):
    """
    Sqlalchemy company signals model
    """
    __tablename__ = "company_signals"

    id = Column(Integer, primary_key=True)
    url = Column('url', String(255), unique=True)
    title = Column('title', String(255))
    content = Column('content', Text())
    date = Column('date', DateTime)
    company = Column('company', String(100))
    signal_type = Column('signal_type', String(50))