from fastapi import FastAPI
from app.api.routes import auth, users, products, cart, orders, projects, favorites, posts

app = FastAPI()

@app.get("/")
def root():
    return {"status": "ok"}

app.include_router(auth.router, prefix="/auth")
app.include_router(users.router, prefix="/users")
app.include_router(products.router, prefix="/products")
app.include_router(cart.router, prefix="/cart")
app.include_router(orders.router, prefix="/orders")
app.include_router(projects.router, prefix="/projects")
app.include_router(favorites.router, prefix="/favorites")
app.include_router(posts.router, prefix="/posts")