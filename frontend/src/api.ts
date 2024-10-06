const BASE_URL = process.env.NEXT_PUBLIC_API_URL

async function fetchAPI(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body?: any
) {
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  const response = await fetch(BASE_URL + url, options)
  return response.json()
}

interface CreateTodo {
  title: string
  description: string
}

export async function addTodo(todo: CreateTodo) {
  return await fetchAPI("/todos", "POST", todo)
}

interface UpdateTodo {
  id: number
  title?: string
  description?: string
  completed?: boolean
}

export async function updateTodo(todo: UpdateTodo) {
  return await fetchAPI(`/todos/${todo.id}`, "PATCH", todo)
}

export async function deleteTodo(id: number) {
  return await fetchAPI(`/todos/${id}`, "DELETE")
}
