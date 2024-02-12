import Button from "./Button"
function Buttons({buttonName}){
  return <div className="row mt-1 p-3">
    <div className="col px-3 text-center">
        {buttonName.map((item) => (<Button key={item} buttonName={item}></Button>))}
    </div>
  </div>
}
export default Buttons;