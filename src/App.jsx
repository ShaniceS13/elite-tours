import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fleet from "./components/Fleet";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
    </div>
  );
}

export default App;
