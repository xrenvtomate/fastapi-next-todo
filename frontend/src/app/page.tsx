import Todos from "@/components/Todos"
import { Separator } from "@/components/ui/separator"

export default async function Home() {
  const response = await fetch(`${process.env.LOCAL_API_URL}/todos`, {
    cache: "no-store",
  })
  const todos = await response.json()

  return (
    <div className="p-16 flex flex-col items-center">
      <div className="w-80 bg-zinc-800 p-4 rounded-lg shadow-lg border border-zinc-700">
        <h1 className="text-3xl font-bold">To Do App</h1>
        <Separator className="bg-zinc-600 my-4" />
        <Todos initialTodos={todos} />
      </div>
    </div>
  )
}
