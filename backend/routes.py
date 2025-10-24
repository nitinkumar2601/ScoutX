from flask import jsonify, request
from app import app, db
from models import Lead, LeadScore, ProductRecommendation

@app.route('/api/leads', methods=['GET'])
def get_leads():
    leads = Lead.query.all()
    return jsonify([lead.to_dict() for lead in leads])

@app.route('/api/leads/<int:lead_id>', methods=['GET'])
def get_lead(lead_id):
    lead = Lead.query.get_or_404(lead_id)
    return jsonify(lead.to_dict())

@app.route('/api/leads/<int:lead_id>/score', methods=['GET'])
def get_lead_score(lead_id):
    score = LeadScore.query.filter_by(lead_id=lead_id).first_or_404()
    return jsonify(score.to_dict())

@app.route('/api/leads/<int:lead_id>/recommendations', methods=['GET'])
def get_lead_recommendations(lead_id):
    recommendations = ProductRecommendation.query.filter_by(lead_id=lead_id).all()
    return jsonify([rec.to_dict() for rec in recommendations])