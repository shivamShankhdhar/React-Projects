import { useRef } from "react";

function AddTodo({handleOnClick}){

  let nameInputValue = useRef();
  let dueDateInputValue = useRef();

let handleAddButtonClicked = () => {
  if(taskName != undefined && dueDate != undefined){
    const taskName  = nameInputValue.current.value;
    const dueDate   = dueDateInputValue.current.value;
    nameInputValue.current.value = "";
    dueDateInputValue.current.value = "";
  handleOnClick(taskName,dueDate);
  }
}
  return <>
    <div className="row border py-3 rounded justify-content-center">
            <div className="col-5">
              <input ref={nameInputValue} type="text" className="form-control" placeholder="Enter Task" />
            </div>
            <div className="col-5">
              <input ref={dueDateInputValue} className="form-control" type="date" />
            </div>
            <div className="col-2">
              <button className="btn btn-success btn-sm" onClick={handleAddButtonClicked}> Add Task</button>
              </div>
          </div>
        
  </>
}

export default AddTodo;