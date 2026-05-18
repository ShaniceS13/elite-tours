import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-tag">Roatan, Bay Islands · Honduras </p>
        <h1>
          Where the Island
          <br />
          <em>Comes Alive</em>
        </h1>
        <p className="hero-sub">
          Private, luxury tour experiences rooted in family, faith, and the
          beauty of Roatán, crafted for those who want to see the island the way
          it was meant to be seen
        </p>
        <div className="hero-btns">
          <a href="#tours" className="btn-primary">
            Explore Experiences
          </a>
          <a href="#about" className="btn-outline">
            Our Story
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
