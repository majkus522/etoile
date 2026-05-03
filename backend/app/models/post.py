from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float
from app.db.base import Base

class BlogPost(Base):
    __tablename__ = "blog_posts"

    post_id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    project_id = Column(Integer)
    title = Column(String)
    description = Column(String)
    image_path = Column(String)
    created_at = Column(DateTime)