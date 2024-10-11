import React from 'react'
import Todo from './Todo'
import { useSelector } from "react-redux";


const Todos = () => {
  const todo = useSelector((state) => state.todos);
  


  return (
    <div>
      <div className="w-1/2 min-h-20 flex flex-col gap-6 mx-auto mt-20">
        {todo.map((singleTodo) => {
          return <Todo key={singleTodo.id} todoText={singleTodo.text} todoId={singleTodo.id} />
              })}  
      </div>
    </div>
  )
}

export default Todos
