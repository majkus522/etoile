from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float
from app.db.base import Base

class Cart(Base):
    __tablename__ = "cart"

    cart_item_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    product_id = Column(Integer, ForeignKey("products.product_id"))
    project_id = Column(Integer, ForeignKey("custom_projects.project_id"))
    quantity = Column(Integer)