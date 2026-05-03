import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fleet from "./components/Fleet";
import WhyELite from "./components/WhyElite";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <WhyELite />
    </div>
  );
}

export default App;
