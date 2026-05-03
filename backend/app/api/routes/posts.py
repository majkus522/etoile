from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.post import BlogPost

router = APIRouter()

@router.post("/")
def create_post(data: dict, db: Session = Depends(get_db)):
    post = BlogPost(**data)
    db.add(post)
    db.commit()
    return {"msg": "posted"}