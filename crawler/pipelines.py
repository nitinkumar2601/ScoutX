"""
Pipeline for processing scraped items
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from crawler.models import CompanySignal, db_connect, create_table

class CompanySignalsPipeline:
    def __init__(self):
        """
        Initialize the pipeline with database connection
        """
        engine = db_connect()
        create_table(engine)
        self.Session = sessionmaker(bind=engine)

    def process_item(self, item, spider):
        """
        Process scraped item and save to database
        """
        session = self.Session()
        signal = CompanySignal(
            url=item['url'],
            title=item['title'],
            content=item['content'],
            date=item['date'],
            company=item['company'],
            signal_type=item['signal_type']
        )

        try:
            session.add(signal)
            session.commit()
        except:
            session.rollback()
            raise
        finally:
            session.close()

        return item