import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Heading from "./components/Heading";
import InputField from "./components/InputField";
import "./App.css";
import { useState } from "react";

function App() {
  let foodItems = ['rice','roti','dal','salad','ghee','milk','chapati'];

  let [textState,setTextState] = useState("food item eneteres by user");

  let handleOnClick = (event) =>{
    setTextState(event.target.value);
  }
  
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 mt-5">
            <Heading/>
            <InputField handleOnClick={handleOnClick}/>
            <div className="row">
              <div className="col">
                {textState}
              </div>
            </div>
            <ErrorMessage items={foodItems}/>
            <FoodItems items={foodItems}/>
          </div>
        </div>        
      </div>
  )
}

export default App
