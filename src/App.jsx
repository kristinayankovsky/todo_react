import { useState } from "react"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])

  function addTodo(text) {

    const newTodo = {
      id: Date.now(),
      text: text
    }

    setTodos([...todos, newTodo])

  }

  function deleteTodo(id) {

    setTodos(
      todos.filter(todo => todo.id !== id)
    )

  }

  return (

    <div className="container">

      <Header />

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />

    </div>

  )

}

export default App

