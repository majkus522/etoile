from pydantic import BaseModel

class ProductFilter(BaseModel):
    category_id: int