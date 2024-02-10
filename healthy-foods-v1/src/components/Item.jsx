import styles from "./Item.module.css"
const Item = ({foodItem}) =>{
  return  <li className={`${styles['custom-css']} list-group-item`}>{foodItem}</li>
}
export default Item;