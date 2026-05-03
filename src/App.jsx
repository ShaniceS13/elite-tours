import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fleet from "./components/Fleet";
import WhyELite from "./components/WhyElite";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <WhyELite />
      <Gallery />
    </div>
  );
}

export default App;
