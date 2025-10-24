from app import db
from datetime import datetime

class Lead(db.Model):
    __tablename__ = 'leads'
    
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    website = db.Column(db.String(200))
    industry = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    scores = db.relationship('LeadScore', backref='lead', lazy=True)
    recommendations = db.relationship('ProductRecommendation', backref='lead', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'company_name': self.company_name,
            'description': self.description,
            'website': self.website,
            'industry': self.industry,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

class LeadScore(db.Model):
    __tablename__ = 'lead_scores'
    
    id = db.Column(db.Integer, primary_key=True)
    lead_id = db.Column(db.Integer, db.ForeignKey('leads.id'), nullable=False)
    score = db.Column(db.String(10), nullable=False)  # Hot, Warm, Cold
    confidence = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'lead_id': self.lead_id,
            'score': self.score,
            'confidence': self.confidence,
            'created_at': self.created_at.isoformat()
        }

class ProductRecommendation(db.Model):
    __tablename__ = 'product_recommendations'
    
    id = db.Column(db.Integer, primary_key=True)
    lead_id = db.Column(db.Integer, db.ForeignKey('leads.id'), nullable=False)
    product_name = db.Column(db.String(100), nullable=False)
    score = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'lead_id': self.lead_id,
            'product_name': self.product_name,
            'score': self.score,
            'created_at': self.created_at.isoformat()
        }