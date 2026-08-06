import { useParams, Link } from "react-router-dom";
import { packages } from "../data/packages";
import "../styles/TourDetail.css";

export default function TourDetail() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === Number(id));

  if (!pkg) {
    return (
      <section className="tour-detail">
        <p>Tour not found.</p>
        <Link to="/">Back to Home</Link>
      </section>
    );
  }

  return (
    <section className="tour-detail">
      <Link to="/#tours" className="back-link">
        ← Back to Tours
      </Link>

      <div className="tour-detail-header">
        <span className="section-tag">{pkg.tagline}</span>
        <h1 className="section-title">{pkg.name}</h1>
        <div className="tour-detail-meta">
          <span className="tour-detail-price">
            {pkg.price > 0 ? `$${pkg.price} pp` : "Quoted"}
          </span>
          <span className="tour-detail-duration">{pkg.duration}</span>
          <span className="tour-detail-min">Min. 2 participants</span>
        </div>
      </div>

      <div className="tour-detail-body">
        <p className="tour-full-description">{pkg.fullDescription}</p>

        {pkg.itinerary && (
          <div className="tour-itinerary-block">
            <h3>Itinerary</h3>
            <div className="itinerary-list">
              {pkg.itinerary.map((stop, i) => (
                <div key={i} className="itinerary-stop">
                  <span className="itinerary-stop-label">
                    Stop {i + 1}: {stop.stop}
                  </span>
                  <span className="itinerary-stop-time">{stop.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="tour-includes-block">
          <h3>What's Included</h3>
          <ul>
            {pkg.includes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="tour-meeting-block">
          <h3>Meeting Point & Pickup</h3>
          <p>
            We come to you! Once your booking is confirmed, we'll reach out
            directly to coordinate your exact pickup based on where you're
            staying:
          </p>
          <ul>
            <li>
              <strong>Cruise passengers:</strong> We'll confirm your exact
              meeting point near your cruise terminal (Mahogany Bay or Coxen
              Hole/Roatán Village) ahead of your tour date.
            </li>
            <li>
              <strong>Hotel & resort guests:</strong> We'll arrange pickup
              directly from your hotel or resort.
            </li>
            <li>
              <strong>
                Private stays (Airbnb, vacation rental, visiting family):
              </strong>{" "}
              Let us know your location when booking, and we'll arrange a
              convenient pickup spot.
            </li>
          </ul>
          <p>
            You'll receive your exact meeting details directly from us after
            booking — no guesswork required.
          </p>
        </div>

        <div className="tour-safety-block">
          <h3>Traveling with Young Children?</h3>
          <p>
            Children under 5 may not be able to participate in certain
            activities (zip lining, ATV, horseback riding, snorkeling) due to
            safety requirements. Please contact us before booking if you're
            traveling with young children so we can help you choose the right
            tour.
          </p>
        </div>

        <Link to="/#book" className="pkg-btn tour-detail-book-btn">
          Book This Tour
        </Link>
      </div>
    </section>
  );
}
