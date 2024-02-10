function AddTodo(){
  return <>
    <div className="row border py-3 rounded justify-content-center">
            <div className="col-5">
              <input type="text" className="form-control" placeholder="Enter Task" />
            </div>
            <div className="col-5">
              <input className="form-control" type="date" />
            </div>
            <div className="col-2">
              <button className="btn btn-success btn-sm"> Add Task</button>
              </div>
          </div>
        
  </>
}

export default AddTodo;