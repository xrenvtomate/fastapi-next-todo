"use client"

import { Todo } from "@/types"
import { useEffect, useMemo, useState } from "react"
import TodoList from "./TodoList"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import * as api from "@/api"

export default function Todos({ initialTodos }: { initialTodos: Todo[] }) {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const addTodo = async () => {
    if (!newTodo) return
    try {
      await api.addTodo({
        title: newTodo,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae, quis nemo ducimus similique facere amet magnam eius voluptatum deserunt repellat, vel, sit nostrum fugiat et eos obcaecati odit accusamus!",
      })
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: newTodo,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae, quis nemo ducimus similique facere amet magnam eius voluptatum deserunt repellat, vel, sit nostrum fugiat et eos obcaecati odit accusamus!",
          completed: false,
        },
      ])
      setNewTodo("")
    } catch (e) {
      console.log(e)
      return
    }
  }
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-4">
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border-zinc-600 bg-zinc-700"
          placeholder="Title"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <TodoList {...{ todos, setTodos }} />
    </div>
  )
}
