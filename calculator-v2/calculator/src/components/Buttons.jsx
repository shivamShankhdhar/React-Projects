import Button from "./Button"
function Buttons({onBtnClick}){
  let buttons = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '+',
    '-',
    '*',
    '/',
    'C',
    '%',
    '='
  ]
  return <div className="row mt-1 p-3">
    <div className="col px-3 text-center">
        {buttons.map((item) => (<Button key={item} buttonName={item} onBtnClick={onBtnClick}></Button>))}
    </div>
  </div>
}
export default Buttons;