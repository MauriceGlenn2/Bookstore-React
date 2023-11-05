import Nav from "./Components/Nav.jsx";
import Landing from "./Components/Landing.jsx";
import "./index.css"
import Highlights from "./Components/Highlights.jsx";
import Featured from "./Components/Featured.jsx";
import Discounted from "./Components/Discounted.jsx";
import Explore from "./Components/Explore.jsx";
import Footer from "./Components/Footer.jsx";


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
