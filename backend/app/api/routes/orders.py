from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.order import Order

router = APIRouter()

@router.get("/")
def get_orders(db: Session = Depends(get_db)):
    return db.query(Order).all()