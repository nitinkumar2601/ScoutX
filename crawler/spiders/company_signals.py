# -*- coding: utf-8 -*-
import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class CompanySignalsSpider(CrawlSpider):
    name = 'company_signals'
    allowed_domains = ['example.com']  # Replace with actual domains
    start_urls = ['https://example.com']  # Replace with actual URLs

    rules = (
        Rule(
            LinkExtractor(
                allow=('company', 'news', 'press-release'),
            ),
            callback='parse_signal',
            follow=True
        ),
    )

    def parse_signal(self, response):
        yield {
            'url': response.url,
            'title': response.css('h1::text').get(),
            'content': ' '.join(response.css('article p::text').getall()),
            'date': response.css('.date::text').get(),
            'company': response.css('.company-name::text').get(),
            'signal_type': 'news',  # Can be news, funding, expansion, etc.
        }