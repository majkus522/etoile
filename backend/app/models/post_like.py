from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float
from app.db.base import Base

class PostLike(Base):
    __tablename__ = "post_likes"

    like_id = Column(Integer, primary_key=True)
    post_id = Column(Integer)
    user_id = Column(Integer)