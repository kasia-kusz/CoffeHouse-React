import Showcase from "./components/Showcase/Showcase";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import Home from "./pages/Home/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Showcase />
      <Introduction />
      <Route exact path="/" component={Home}></Route>
      <Footer />
    </div>
  );
}

export default App;
