import { ChangeEvent, FormEvent } from "react"

export type AddTodoProps = {
  task: string
  handlerSubmitTodo: (e: FormEvent) => void
  handlerChange: (e: ChangeEvent) => void
}

export const AddTodo = ({
  task,
  handlerSubmitTodo,
  handlerChange
}:AddTodoProps) => (
  <form className="flex justify-between w-full pt-4" onSubmit={handlerSubmitTodo}>
    <input className="flex-1 rounded shadow p-2 text-grey-dark mr-2" type="text" name="task" value={task} onChange={handlerChange}></input>
    <button className="bg-green-400 hover:bg-green-500 px-4 text-white font-bold rounded text-2xl" type="submit" arial-label="Add todo">+</button>
  </form>
)