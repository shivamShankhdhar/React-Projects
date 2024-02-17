import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import InputControls from "./components/InputControls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";
function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <Container>
      <section className="jumbotron text-center">
        <div className="container">
          <Header />
          {privacy ? <Counter /> : <PrivacyMessage />}
          <Controls />
          <InputControls />
        </div>
      </section>
    </Container>
  );
}

export default App;
