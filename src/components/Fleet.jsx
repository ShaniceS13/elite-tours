import useInView from "../hooks/useInView";
import "../styles/Fleet.css";

export default function Fleet() {
  const [ref, inView] = useInView();
  return (
    <section className="fleet" id="fleet" ref={ref}>
      <div className={`fleet-intro fade-in ${inView ? "visible" : ""}`}>
        <span className="section-tag">Our Fleet</span>
        <h2 className="section-title">
          Comfort Meets <br /> the Caribbean
        </h2>
        <p>
          Our modern, well-maintained fleet is designed for your comfort from
          the moment you step aboard, whether you're a group of adventurers or a
          family discovering the island for the first time
        </p>
      </div>

      <div className={`fleet-grid fade-in ${inView ? "visible" : ""}`}>
        <div className="fleet-card">
          <img
            src="/images/bus-21.PNG"
            alt="21-seater tour bus"
            className="fleet-card-img"
          />
          <div className="fleet-card-body">
            <h3>The Grand Islander</h3>
            <span className="fleet-badge">21 Passengers</span>
            <p>
              Perfect for cruise groups and resort excursions, our 21-seater
              delivers a premium group experience with ample space, comfort
              seating, and island-knowledgeable guides on board
            </p>

            <div className="fleet-specs">
              <div className="fleet-spec-item">
                <span className="spec-label">Capacity</span>
                <span className="spec-value">21</span>
              </div>
              <div className="fleet-spec-item">
                <span className="spec-label">Type</span>
                <span className="spec-value">Group</span>
              </div>
              <div className="fleet-spec-item">
                <span className="spec-label">Climate</span>
                <span className="spec-value">A/C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="fleet-card">
          <img
            src="/images/van-11.PNG"
            alt="11-seater private van"
            className="fleet-card-img"
          />

          <div className="fleet-card-body">
            <h3>The Isle Cruiser</h3>
            <span className="fleet-badge">11 Passengers</span>
            <p>
              Ideal for intimate groups and private family tours, the 11-seater
              offers a boutique travel experience, more personal, more flexible,
              and every bit as elevated
            </p>
            <div className="fleet-specs">
              <div className="fleet-spec-item">
                <span className="spec-label">Capacity</span>
                <span className="spec-value">11</span>
              </div>
              <div className="fleet-spec-item">
                <span className="spec-label">Type</span>
                <span className="spec-value">Private</span>
              </div>
              <div className="fleet-spec-item">
                <span className="spec-label">Climate</span>
                <span className="spec-value">A/C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
