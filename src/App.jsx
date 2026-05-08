import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fleet from "./components/Fleet";
import WhyELite from "./components/WhyElite";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <WhyELite />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
