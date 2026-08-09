import Hero from "./Hero";
import About from "./About";
import Fleet from "./Fleet";
import WhyELite from "./WhyElite";
import Gallery from "./Gallery";
import Experiences from "./Experience";
import BookingForm from "./BookingForm";
import Mission from "./Mission";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OurServices from "./OurServices";
import GivingBack from "./GivingBack";
import CultureSpotlight from "./CultureSpotlight";
import FunFacts from "./FunFacts";
import LocalRecommendations from "./LocalRecommendations";
import WaveDivider from "./WaveDivider";
import RippedDivider from "./RippedDivider";

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

      <GivingBack />
      <WaveDivider topColor="#0d5247" bottomColor="#fdfaf4" />
      <OurServices />
      <WaveDivider topColor="#fdfaf4" bottomColor="#0d5247" />
      <Fleet />

      <WaveDivider topColor="#0d5247" bottomColor="#f5f0e8" />
      <CultureSpotlight />

      <FunFacts />
      <Gallery />
      <BookingForm />
      <WaveDivider topColor="#fdfaf4" bottomColor="#b8860b" />
      <LocalRecommendations />
    </>
  );
}
