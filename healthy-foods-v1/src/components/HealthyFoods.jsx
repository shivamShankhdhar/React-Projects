import "bootstrap/dist/css/bootstrap.min.css"
import Item from "./Item";
function HealthyFoods({items}){
  return <>
    <ul className="list-group">
      {items.map((item)=>(
       <Item key={item} foodItem={item}/>
      ))}
    </ul>
  </>
}
export default HealthyFoods;