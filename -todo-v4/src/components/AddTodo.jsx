import { useState } from "react";

function AddTodo({handleOnClick}){

let [taskName,setTaskName]  = useState('');
let [dueDate,setDueDate]    = useState('');

let handleTaskNameChange = (event) =>{
  if(event.target.value != undefined)
    setTaskName(event.target.value);
}
let handleDueDateChange = (event) =>{
  if(event.target.value != undefined)
  setDueDate(event.target.value);
}

let handleAddButtonClicked = () => {
  if(taskName != undefined && dueDate != undefined){
  handleOnClick(taskName,dueDate);
  setTaskName("");
  setDueDate("");
  }
}
  return <>
    <div className="row border py-3 rounded justify-content-center">
            <div className="col-5">
              <input onChange={handleTaskNameChange} type="text" className="form-control" placeholder="Enter Task" value={taskName}/>
            </div>
            <div className="col-5">
              <input onChange={handleDueDateChange} className="form-control" type="date" value={dueDate}/>
            </div>
            <div className="col-2">
              <button className="btn btn-success btn-sm" onClick={handleAddButtonClicked}> Add Task</button>
              </div>
          </div>
        
  </>
}

export default AddTodo;