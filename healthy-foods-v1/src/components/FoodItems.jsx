import "bootstrap/dist/css/bootstrap.min.css"
import Item from "./Item";
function FoodItems({items}){
  return <div className="row justify-content-center border rounded mt-2 py-3">
      <div className="col">
          <ul className="list-group">
          {items.map((item)=>(
          <Item key={item} foodItem={item} handleOnClick={()=>{alert(`buy ${item}`)}}/>
          ))}
        </ul>
      </div>
    </div>
 
}
export default FoodItems;