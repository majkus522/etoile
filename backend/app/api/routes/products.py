from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.product import Product
from app.schemas.product import ProductFilter, ProductName

router = APIRouter()
@router.get("/")
def get_all_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@router.get("/")
def get_products(product_id: ProductFilter, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.category_id == product_id.category_id).all()

@router.get("/")
def get_product_by_name(product_name: ProductName, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.name == product_name.name).first()