import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"

function App() {

  const todoItems = [
    {
    name:"buy milk",
    dueDate:"24/10/2024"
  },
  {
    name:"buy milk again",
    dueDate:"25/10/2024"
  },
]
  return (
    <div className="container">
      <div className="container top-container">
          <AppName/>
          <AddTodo/>
      </div> 
      <TodoItems todoItems = {todoItems}/>
    </div>
    
  )
}

export default App
