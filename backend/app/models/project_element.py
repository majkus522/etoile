from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float
from app.db.base import Base

class ProjectElement(Base):
    __tablename__ = "project_elements"

    project_element_id = Column(Integer, primary_key=True)
    project_id = Column(Integer, ForeignKey("custom_projects.project_id"))
    product_id = Column(Integer, ForeignKey("products.product_id"))
    quantity = Column(Integer)