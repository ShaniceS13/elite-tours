import "../styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img
          src="/images/roatan-aerial.jpg"
          alt="Roatan aerial view"
          className="about-img-main"
        />

        <img
          src="/images/roatan-paddle.jpg"
          alt="Roatan crystal waters"
          className="about-img-accent"
        />
      </div>

      <div className="about-text">
        <span className="section-tag">Our Story</span>
        <h2 className="section-title">
          Built on Love, <br /> Grounded in Faith
        </h2>
        <p>
          EliTe Tours was born from a deeply personal place, a family's love for
          their island, their roots, and the people who shaped them. What
          started as a dream has grown into something far greater: a
          purpose-driven business built to honor legacy and share the beauty of
          Roatan with the world.
        </p>
        <p>
          {" "}
          As a <strong>family-owned and operated</strong>company, we pour our
          hearts into every tour. When you travel with us, you're not just a
          passenger, you're a guest of our family, experiencing this island the
          way locals know it best
        </p>
        <div className="about-divider"></div>
        <span className="about-names">In loving memory of Eli & Tete</span>
        <p className="about-memorial">
          Their names carry this business forward.
          <br />
          Their spirit shapes every mile
        </p>
      </div>
    </section>
  );
}
