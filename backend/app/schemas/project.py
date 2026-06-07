from pydantic import BaseModel
from datetime import datetime

class ProjectCreate(BaseModel):
    name: str
    image_path: str
    total_price: float
    category_id: int
    metal: str
    project_size: int
    trinket1: str
    trinket2: str

class ProjectName(BaseModel):
    name: str