let ErrorMessage = ({items}) => {
  
  return <div className="row">
    <div className="col">
      {items.length === 0 && <h1>I am still hungry</h1>}
    </div>
  </div>
}
export default ErrorMessage;