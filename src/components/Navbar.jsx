import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="nav-logo"
        onClick={() => {
          setIsOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src="/images/full-logo.png"
          alt="Roatan by EliTe Tours"
          className="nav-logo-img"
        />
        <span className="nav-logo-text">
          Roatan by Eli<span>Te</span> <span>Tours</span>
        </span>
      </Link>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/#about" onClick={() => setIsOpen(false)}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/#fleet" onClick={() => setIsOpen(false)}>
            Our Fleet
          </Link>
        </li>
        <li>
          <Link to="/#tours" onClick={() => setIsOpen(false)}>
            Experiences
          </Link>
        </li>
        <li>
          <Link to="/#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/#gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/policy" onClick={() => setIsOpen(false)}>
            Policy
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/#book"
            className="nav-cta"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
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
