from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float
from app.db.base import Base

class Favorite(Base):
    __tablename__ = "favorites"

    favorite_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    product_id = Column(Integer)
    project_id = Column(Integer)