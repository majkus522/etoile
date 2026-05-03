from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.project import CustomProject

router = APIRouter()

@router.post("/")
def create_project(project: dict, db: Session = Depends(get_db)):
    new_project = CustomProject(**project)
    db.add(new_project)
    db.commit()
    return {"msg": "created"}