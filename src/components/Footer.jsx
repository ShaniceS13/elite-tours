import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">
            Eli<span>Te</span>Tours
          </span>
          <p>
            A family-owned tour company rooted in the beauty of Roatan and built
            on a legacy of love. We show the world our island, one experience at
            a time.
          </p>
        </div>
        <div className="footer-col">
          <h5>Explore</h5>
          <ul>
            <li>
              <a href="#about">Our Story</a>
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
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="#book">Book a Tour</a>
            </li>
            <li>
              <a href="#mailto:info@elitetours.hn">info@elitetours.hn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a
                href="https://wa.me/50412345678"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 EliTe Tours · Roatán, Honduras · All rights reserved</p>
        <span className="footer-memorial">For Eli & Tete, always</span>
      </div>
    </footer>
  );
}
