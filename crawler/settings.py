"""
Configuration for the Scrapy project
"""

# Scrapy settings
BOT_NAME = 'company_signals'

SPIDER_MODULES = ['crawler.spiders']
NEWSPIDER_MODULE = 'crawler.spiders'

# Crawl responsibly by identifying yourself
USER_AGENT = 'SmartLeadScouting (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# Configure item pipelines
ITEM_PIPELINES = {
    'crawler.pipelines.CompanySignalsPipeline': 300,
}

# Configure maximum concurrent requests
CONCURRENT_REQUESTS = 16

# Configure a delay for requests for the same website
DOWNLOAD_DELAY = 3

# Enable or disable downloader middlewares
DOWNLOADER_MIDDLEWARES = {
   'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
   'scrapy.downloadermiddlewares.retry.RetryMiddleware': None,
}

# Database settings (to be loaded from environment variables)
DATABASE = {
    'drivername': 'postgres',
    'host': 'localhost',
    'port': '5432',
    'username': 'sls_user',
    'password': 'sls_password',
    'database': 'sls_db'
}

# Redis settings
REDIS_HOST = 'localhost'
REDIS_PORT = 6379