import React from 'react'
import TodoInput from './components/TodoInput'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 border border-zinc-900">
        <TodoInput />
        <Todos />
      </div>
    </>
  )
}

export default App
