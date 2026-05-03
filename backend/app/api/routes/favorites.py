from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.favorite import Favorite

router = APIRouter()

@router.post("/")
def add_favorite(data: dict, db: Session = Depends(get_db)):
    fav = Favorite(**data)
    db.add(fav)
    db.commit()
    return {"msg": "ok"}