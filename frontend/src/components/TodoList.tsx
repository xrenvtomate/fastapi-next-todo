"use client"

import { Todo } from "@/types"
import TodoItem from "./TodoItem"

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}) {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem
            {...{
              todo,
              updateTodo: (todo: Todo) =>
                setTodos(todos.map((el) => (el.id == todo.id ? todo : el))),
              removeTodo: (todo: Todo) =>
                setTodos(todos.filter((el) => el.id != todo.id)),
            }}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  )
}
