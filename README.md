# Smart Lead Scouting (SLS)

An AI-powered lead discovery and scoring engine that automates the identification, enrichment, and prioritization of potential clients.

## Architecture

```
          ┌──────────────────────────┐
          │   Data Sources (APIs)    │
          │ Crunchbase, LinkedIn etc │
          └──────────┬───────────────┘
                     │
          ┌──────────▼──────────┐
          │  Scrapy Crawler     │
          │  (Buying Signals)   │
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │   Flask Backend     │
          │  (Lead Aggregator)  │
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │   ML Models (NLP)   │
          │ Scoring & Recommends│
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │  PostgreSQL / Redis │
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │ React Dashboard     │
          │ (Visualization)     │
          └─────────────────────┘
```

## Components

1. **Crawler Service** (Scrapy)
   - Web scraping for company data
   - Signal detection from news and announcements
   - Data preprocessing and cleaning

2. **Backend Service** (Flask)
   - RESTful API endpoints
   - Data aggregation and processing
   - Integration with ML models
   - Database management

3. **ML Models**
   - Lead scoring (Hot/Warm/Cold classification)
   - Product recommendation engine
   - NLP for signal detection
   - Company profile analysis

4. **Storage**
   - PostgreSQL for structured data
   - Redis for caching and real-time features

5. **Frontend Dashboard** (React)
   - Lead visualization and management
   - Interactive scoring dashboard
   - Product recommendations view
   - Analytics and reporting

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL 13+
- Redis 6+

### Installation

1. Clone the repository
2. Set up virtual environments for Python services
3. Install dependencies for each component
4. Configure environment variables
5. Initialize databases
6. Start services

Detailed setup instructions for each component can be found in their respective directories.

## Development

Each component has its own development guidelines and requirements. Please refer to the README files in each component's directory for specific instructions.