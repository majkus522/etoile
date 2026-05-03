from app.db.base import Base
from app.db.session import engine

import app.models.user  # MUSI być, żeby SQLAlchemy widział model

def init_db():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()