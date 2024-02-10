import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"

function App() {

  return (
    <div className="container">
      <div className="container top-container">
          <AppName/>
          <AddTodo/>
      </div> 
      <div className="container  mt-2  border p-3 text-center rounded">
    <TodoItem/>
    <TodoItem/>
      </div>
    </div>
    
  )
}

export default App
