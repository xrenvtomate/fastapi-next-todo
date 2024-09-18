from pydantic import BaseModel


class TodoBase(BaseModel):
    id: int
    title: str
    description: str | None
    completed: bool


class Todo(TodoBase):
    description: str | None
    completed: bool | None

    class Config:
        orm_mode = True


class TodoCreate(BaseModel):
    title: str
    description: str | None


class TodoUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    completed: bool | None = None
