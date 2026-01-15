import { useState } from 'react'
import TodoForm from './components/TodoForm'
import { TodoContextProvider } from './contexts'
import TodoItem from './components/TodoItem'



function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [...prev, {id: Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id ))
  }

  const toggleCompelete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, compeleted: !prevTodo.compeleted}: prevTodo))
  }

  return (
    <TodoContextProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleCompelete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />
            })}

            
          </div>
        </div>
      </div>

    </TodoContextProvider>
  )
}

export default App
