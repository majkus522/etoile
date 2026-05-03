from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.cart import Cart

router = APIRouter()

@router.post("/")
def add_to_cart(item: dict, db: Session = Depends(get_db)):
    cart_item = Cart(**item)
    db.add(cart_item)
    db.commit()
    return {"msg": "added"}