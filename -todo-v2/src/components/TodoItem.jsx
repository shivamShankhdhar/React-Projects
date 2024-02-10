function TodoItem({todoName,todoDate}){
  return <>
       <div className="row justify-content-center">
          <div className="col-5">
              <p>{todoName}</p>
            </div>
            <div className="col-5">
            <p>{todoDate}</p>
            </div>
            <div className="col-2">
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
  </>
}

export default TodoItem;