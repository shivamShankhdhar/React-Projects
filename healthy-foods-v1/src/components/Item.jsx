let handleBuyButtonClicked = ({foodItem,handleOnClick})=>{
  alert(`${foodItem} is being bought`)
}
let Item = ({foodItem,handleOnClick}) =>{
  return   <li className="list-group-item d-flex justify-content-between align-items-center">{foodItem}<button className="btn btn-sm btn-warning" onClick={handleOnClick}>Buy This</button></li>
   
}
export default Item;