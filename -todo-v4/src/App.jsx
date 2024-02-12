import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMessage from "./components/WelcomeMessage"
function App() {

const [todoItems,setTodoItems] = useState([]);

const onNewItem = (itemName,itemDueDate) =>{
  const newItem = [...todoItems,{name:itemName,dueDate:itemDueDate}];
  setTodoItems(newItem);
  // console.log(`items added ${itemName} and date ${itemDueDate}`)
};
const handleDeleteItem = (itemName) => {
  const newItems = todoItems.filter(item => item.name !== itemName);
  setTodoItems(newItems);
}
  return (
    <div className="container">
      <AppName/>
      <AddTodo handleOnClick = {onNewItem}/>   
      { todoItems.length === 0 && <WelcomeMessage/>}      
      { todoItems.length >0 && <TodoItems todoItems = {todoItems} onDelete ={handleDeleteItem} />}
    </div>   
  )
}
export default App
