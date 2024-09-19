from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import schemas
from db import crud
from deps import get_db

router = APIRouter(
    prefix="/todos",
    tags=["todos"],
)


@router.get("/", response_model=list[schemas.Todo])
def get_todos(db: Session = Depends(get_db)):
    return crud.get_todos(db)


@router.post("/")
def create_todo(
    todo: schemas.TodoCreate,
    db: Session = Depends(get_db),
):
    return crud.create_todo(db, todo)

@router.delete("/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    return crud.delete_todo(db, todo_id)
    


@router.patch("/{todo_id}")
def update_todo(
    todo_id: int, todo_update: schemas.TodoUpdate, db: Session = Depends(get_db)
):
    return crud.update_todo(db, todo_id, todo_update)
