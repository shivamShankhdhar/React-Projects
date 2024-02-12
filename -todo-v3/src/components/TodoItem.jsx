function TodoItem({todoName,todoDate,onDelete}){
  return <>
       <div className="row justify-content-center border rounded mt-2 p-1">
          <div className="col-6">
              <p>{todoName}</p>
            </div>
            <div className="col-5">
            <p>{todoDate}</p>
            </div>
            <div className="col-1">
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(todoName)}>Delete</button>
            </div>
        </div>
  </>
}

export default TodoItem;