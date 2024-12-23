

import './App.css'
// Importing components

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1>this is todo with redux</h1>
      {/* Component to add a new todo */}
      <AddTodo/>
       {/* Component to display the list of todos */}
      <Todos/>
    </>
  )
}

export default App
