from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.main import router as api_router
from db import models
from db.engine import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
