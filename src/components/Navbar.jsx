import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        Eli<span>Te</span>Tours
      </a>

      <ul className="nav-links">
        <li>
          <a href="#about">Our Story </a>
        </li>
        <li>
          <a href="#fleet">Our Fleet</a>
        </li>
        <li>
          <a href="#tours">Experiences</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#book" className="nav-cta">
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
