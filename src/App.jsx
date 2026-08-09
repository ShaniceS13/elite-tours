import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./components/Home";
import TourDetail from "./components/TourDetail";
import ScrollToTop from "./components/ScrollToTop";
import FAQPage from "./components/FAQPage";
import PolicyPage from "./components/PolicyPage";
import GalleryPage from "./components/GalleryPage";
import AllToursPage from "./components/AllToursPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tours/:id" element={<TourDetail />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/tours" element={<AllToursPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
