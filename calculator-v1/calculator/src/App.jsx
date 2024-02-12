import './App.css'
import InputField from './components/InputField'
import "bootstrap/dist/css/bootstrap.min.css"
import CalculatorHeader from './components/CalculatorHeader'
import Buttons from './components/Buttons'

function App() {
  let buttons = ['1','2','3','4','5','6','7','8','9','0','.','+','-','*','/','C','%','=']
  return (
    <div className='container '>
      <div className="row justify-content-center ">
        <div className="col-4 border rounded border-dark mt-5 px-5 py-3">
          <CalculatorHeader/>
          <InputField />
          <Buttons buttonName={buttons}></Buttons>
        </div>
      </div>
      
    </div>
  )
}

export default App;
