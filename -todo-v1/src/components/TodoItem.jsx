function TodoItem(){
  return <>
       <div className="row justify-content-center">
          <div className="col-5">
              <p>Title here</p>
            </div>
            <div className="col-5">
            <p>Date Here</p>
            </div>
            <div className="col-2">
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
  </>
}

export default TodoItem;