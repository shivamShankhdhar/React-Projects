function InputField({displayValue}){
  return <div className="row">
    <div className="col">
      <input class="form-control border-dark" type="text" value={displayValue} readOnly></input>
    </div>
  </div>
  
}

export default InputField;