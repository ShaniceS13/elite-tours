import Hero from "./Hero";
import About from "./About";
import Fleet from "./Fleet";
import WhyELite from "./WhyElite";
import Gallery from "./Gallery";
import Experiences from "./Experience";
import BookingForm from "./BookingForm";
import Mission from "./Mission";
import CancellationPolicy from "./CancellationPolicy";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OurServices from "./OurServices";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Hero />
      <Experiences />
      <About />
      <Mission />
      <WhyELite />
      <OurServices />
      <Fleet />
      <Gallery />
      <BookingForm />
      <CancellationPolicy />
    </>
  );
}
