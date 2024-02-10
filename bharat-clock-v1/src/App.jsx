import ClockHeading from "./components/ClockHeading"
import ClockSlogan from "./components/ClockSlogan"
import CurrentTime from "./components/CurrentTime"
 import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return <div className="container text-center mt-5">    
      <ClockHeading></ClockHeading>
      <CurrentTime></CurrentTime>
      <ClockSlogan></ClockSlogan>
    </div>
}

export default App
