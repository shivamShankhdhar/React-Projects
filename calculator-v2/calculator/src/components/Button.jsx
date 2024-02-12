function Button({buttonName,onBtnClick}){
  return <button className="btn border border-dark mx-1 my-1 p-3 w-25 fw-bolder" onClick={() => onBtnClick(buttonName)}>{buttonName}</button>
}
export default Button;