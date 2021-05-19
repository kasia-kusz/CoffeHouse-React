import "./App.css";
import Showcase from "./components/Showcase/Showcase";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Showcase />
      <Route exact path="/" component={Home}></Route>
      {/* <Route path="/about" component={About}></Route> */}
      <Footer />
    </div>
  );
}

export default App;
