import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Todo } from "@/types"
import { Button } from "./ui/button"
import { useState } from "react"

import * as api from "@/api"
import { toast } from "sonner"

export default function EditTodo({
  todo,
  updateTodo,
  toggleEdit,
}: {
  todo: Todo
  updateTodo: (todo: Todo) => void
  toggleEdit: () => void
}) {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  })

  const save = async () => {
    updateTodo(newTodo)
    await api.updateTodo(newTodo)
    toast("Changes saved!")
    toggleEdit()
  }

  return (
    <>
      <Input
        placeholder="Title"
        className="text-2xl"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <Textarea
        placeholder="Description"
        value={newTodo.description}
        onChange={(e) =>
          setNewTodo({ ...newTodo, description: e.target.value })
        }
      />
      <Button onClick={save}>Save</Button>
    </>
  )
}
