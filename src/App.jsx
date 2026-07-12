import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Fleet from "./components/Fleet";
import WhyELite from "./components/WhyElite";
import Gallery from "./components/Gallery";
import Experiences from "./components/Experience";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Mission from "./components/Mission";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experiences />
      <About />
      <Mission />

      <WhyELite />
      <Fleet />
      <Gallery />

      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
