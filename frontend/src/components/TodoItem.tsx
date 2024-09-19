"use client"

import { Todo } from "@/types"
import { Checkbox } from "./ui/checkbox"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "./ui/separator"
import * as api from "@/api"
import EditTodo from "./EditTodo"
import { Button } from "./ui/button"

export default function TodoItem({
  todo,
  updateTodo,
  removeTodo,
}: {
  todo: Todo
  updateTodo: (todo: Todo) => void
  removeTodo: (todo: Todo) => void
}) {
  const [checked, setChecked] = useState(todo.completed)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const completeTodo = async () => {
    try {
      await api.updateTodo({
        id: todo.id,
        completed: !checked,
      })
      setChecked(!checked)
    } catch (e) {
      console.log(e)
      return
    }
  }
  const deleteTodo = async () => {
    await api.deleteTodo(todo.id)
    setSidebarOpen(false)
    removeTodo(todo)
  }

  return (
    <div className="border border-zinc-600 bg-zinc-700 rounded-md flex items-center gap-4 hover:bg-zinc-600 transition-all">
      <Checkbox
        className="ml-4"
        checked={checked}
        onClick={(e) => {
          completeTodo()
          e.stopPropagation()
        }}
      />

      <Separator
        orientation="vertical"
        className="self-stretch h-auto bg-zinc-500"
      />

      <Sheet open={sidebarOpen} onOpenChange={(open) => setSidebarOpen(open)}>
        <SheetTrigger className="px-4 py-2 ml-0 flex-1 text-start">
          {todo.title}
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-4">
            {edit ? (
              <EditTodo
                {...{ todo, updateTodo, toggleEdit: () => setEdit(!edit) }}
              />
            ) : (
              <>
                <SheetTitle className="text-3xl">{todo.title}</SheetTitle>
                <Separator />
                <SheetDescription>{todo.description}</SheetDescription>
                <Button onClick={() => setEdit(true)}>Edit</Button>
                <Button variant={"destructive"} onClick={deleteTodo}>
                  Delete Todo
                </Button>
              </>
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
