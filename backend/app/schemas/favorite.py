from pydantic import BaseModel
from typing import Optional

class FavoriteAdd(BaseModel):
    product_id: Optional[int] = None
    project_id: Optional[int] = None

class FavoriteDelete(BaseModel):
    favorite_id: int