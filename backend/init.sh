#!/bin/sh

echo "Waiting for database..."

while ! nc -z db 5432; do
  sleep 0.5
done

echo "Database is up!"

python -m app.db.init_db

uvicorn app.main:app --host 0.0.0.0 --port 8000
