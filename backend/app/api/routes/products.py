from fastapi import APIRouter, Depends
from sqlalchemy import null
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.product import Product
from app.schemas.product import ProductFilter

router = APIRouter()
@router.get("/")
def get_all_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@router.get("/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.product_id == product_id).first()
    name = product.name if product.name else "Brak nazwy"
    image_path = product.image_path if product.image_path else null
    price = product.price if product.price else 0
    username = "Etoile_Jewelry"
    return {"name": name, "image_path": image_path, "price": price, "username": username}