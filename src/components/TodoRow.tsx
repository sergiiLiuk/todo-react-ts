type Todo = {
  id: string
  task: string
  isCompleted: boolean
}

type todoProps = {
  todo: Todo
  handleDeteleTodo: (id: string ) => void
  handleCheckTodo: (id: string ) => void
}

export const TodoRow = ({todo: {task, isCompleted, id}, handleDeteleTodo, handleCheckTodo}:todoProps) => (
  <div className={`flex w-full p-4 my-1 justify-between items-center ${isCompleted ? 'bg-gray-400' : 'bg-green-300'}`}>
    <p className={`ml-2 text-xl font-sans font-medium ${isCompleted ? 'text-white line-through' : 'text-gray-700'}`}>{ task }</p>
    <div className={`w-1/6 flex justify-between items-center mr-2`}>
      <button className="px-2 h-7 w-7 flex w-full justify-between items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded" arila-label="Delete a todo" onClick={()=>handleDeteleTodo(id)}>
        <span>X</span>
      </button>
      <input className="form-checkbox h-7 w-7" type="checkbox" checked={isCompleted} onChange={()=>handleCheckTodo(id)}></input>
    </div>
  </div>
)