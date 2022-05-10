import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid';

import {TodoRow} from './TodoRow'
import {AddTodo} from './AddTodo'
  import { data } from '../data'

type Todo = {
  id: string
  task: string
  isCompleted: boolean
}

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const getLocalTodos = () => {
  const localTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  return localTodos ? JSON.parse(localTodos) : []
}

export const TodoList = () => {
  const [todos, setTodos ] = useState<Todo[]>(getLocalTodos)
  const [task, setTask] = useState<string>('')
  const todoslength = todos.length
  const remainingTodos = todos.filter(todo => !todo.isCompleted)
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const handleDeteleTodo = (id: string) => {
    const updatedTodos = todos.filter( todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map( todo => {
      return todo.id === id ?
        {
          ...todo,
          isCompleted: !todo.isCompleted
        } : todo
    })
    setTodos(updatedTodos)
  }

  const handlerChange = (e: ChangeEvent) => {
    // read input value
    const {value} = e.target as HTMLInputElement
    setTask(value)
  }

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTask('')
  }

  const handlerSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    console.log(e)
    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false
    }

    task && handleAddTodo(todo) 
  }

  return (
    <section className="w-10/12 sm:w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <div>
        Total todos: {todoslength}
      </div>
      <div>Remaining todos: {remainingTodos.length}</div>
      <AddTodo task={task} handlerChange={handlerChange} handlerSubmitTodo={handlerSubmitTodo}/> 
      <div className="h-10"></div>
      {
        todos.map((todo)=>(
            <TodoRow key={todo.id} todo={todo} handleDeteleTodo={handleDeteleTodo} handleCheckTodo={handleCheckTodo}></TodoRow>
        ))
      }

    </section>
  )
}