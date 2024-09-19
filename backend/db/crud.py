from sqlalchemy.orm import Session

import schemas

from .models import Todo


def get_todo(db: Session, todo_id: int):
    return db.query(Todo).filter(Todo.id == todo_id).first()


def get_todos(db: Session):
    return db.query(Todo).order_by(Todo.id).all()


def create_todo(db: Session, todo: schemas.TodoCreate):
    todo = Todo(**todo.model_dump())
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo


def delete_todo(db: Session, todo_id: int):
    todo: Todo = get_todo(db, todo_id)
    if not todo:
        return
    db.delete(todo)
    db.commit()


def update_todo(db: Session, todo_id: int, todo_update: schemas.TodoUpdate):
    todo: Todo = get_todo(db, todo_id)
    if not todo:
        return
    todo.title = todo_update.title or todo.title
    todo.description = todo_update.description or todo.description
    if todo_update.completed is not None:
        todo.completed = todo_update.completed
    db.add(todo)
    db.commit()
    db.refresh(todo)
    return todo
