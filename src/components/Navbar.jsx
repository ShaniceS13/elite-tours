import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        Eli<span>Te</span>Tours
      </a>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Our Story{" "}
          </a>
        </li>
        <li>
          <a href="#fleet" onClick={() => setIsOpen(false)}>
            Our Fleet
          </a>
        </li>
        <li>
          <a href="#tours" onClick={() => setIsOpen(false)}>
            Experiences
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#book" className="nav-cta" onClick={() => setIsOpen(false)}>
            Book Now
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
