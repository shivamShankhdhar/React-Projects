import HealthyFoods from "./components/HealthyFoods"
import ErrorMessage from "./components/ErrorMessage"
import "./App.css"
function App() {
  let foodItems = ['rice','roti','dal','salad','ghee','milk','chapati'];
    return (
      <div className="container">
        <h1 className="text-center">Healthy Foods</h1>
        <ErrorMessage items={foodItems}/>
        <HealthyFoods items={foodItems}/>
      </div>
  )
}

export default App
