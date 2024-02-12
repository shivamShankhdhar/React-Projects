import TodoItem from "./TodoItem"
function TodoItems({todoItems,onDelete}) {
  return <>{todoItems.map(item => (<TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDelete = {onDelete} />))}</>
}
export default TodoItems;