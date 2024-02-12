function InputField({handleOnChange}){
  return <div className="row border py-3 px-1 rounded">
    <div className="col-9 ">
      <input type="text" className="form-control" onChange={handleOnChange}></input>
    </div>
    <div className="col-3">
      <button className="btn btn-sm btn-success">Add Item</button>
    </div>
  </div>
  
}
export default InputField;