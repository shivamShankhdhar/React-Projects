import './App.css'
import InputField from './components/InputField'
import "bootstrap/dist/css/bootstrap.min.css"
import CalculatorHeader from './components/CalculatorHeader'
import Buttons from './components/Buttons'
import { useState } from 'react'

function App() {
  let [displayValue,setDisplayValue] = useState("0");

  let handleButtonClick = (buttonName) => {
      if(buttonName === 'C'){
          setDisplayValue(" ");
      }else if(buttonName === '='){
        const evalDisplayValue = eval(displayValue);
        setDisplayValue(evalDisplayValue);
      }else{
        const newDisplayValue = displayValue + buttonName;
        setDisplayValue(newDisplayValue);
      }
    }
  return (
    <div className='container '>
      <div className="row justify-content-center ">
        <div className="col-4 border rounded border-dark mt-5 px-5 py-3">
          <CalculatorHeader/>
          <InputField displayValue={displayValue}/>
          <Buttons onBtnClick={handleButtonClick}></Buttons>
        </div>
      </div>
      
    </div>
  )
}

export default App;
