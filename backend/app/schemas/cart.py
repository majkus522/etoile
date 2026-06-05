# schemas/cart.py

from pydantic import BaseModel
from typing import Optional

class CartCreate(BaseModel):
    product_id: Optional[int] = None
    project_id: Optional[int] = None
    quantity: int

class CartUpdate(BaseModel):
    cart_item_id: int
    quantity: int

class CartDelete(BaseModel):
    cart_item_id: int