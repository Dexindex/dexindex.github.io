import logo from "./logo.svg";
import "./App.css";
import Loaders from "./compenents/loaders";
import Navbar from "./compenents/Navbar";
import Hero from "./compenents/hero";
import Offmenu from "./compenents/Offmenu";

function App() {
  return (
    <div>
      <Loaders />
      <div id="main-wrapper" className="main-wrapper">
        <Navbar />
        <Hero />
        <Offmenu />
      </div>
    </div>
  );
}

export default App;
