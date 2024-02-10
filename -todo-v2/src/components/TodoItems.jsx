import TodoItem from "./TodoItem"
function TodoItems({todoItems}) {
  return  <div className="container  mt-2  border p-3 text-center rounded">
    {todoItems.map(item => (<TodoItem todoName={item.name} todoDate={item.dueDate}/>))}
  
</div>
}
export default TodoItems;