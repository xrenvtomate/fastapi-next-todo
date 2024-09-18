from fastapi import APIRouter

from api.routers.todos import router as todos_router

router = APIRouter()
router.include_router(todos_router)
