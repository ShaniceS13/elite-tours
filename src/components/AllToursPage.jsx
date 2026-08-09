import { Link } from "react-router-dom";
import { packages } from "../data/packages";
import "../styles/AllToursPage.css";

export default function AllToursPage() {
  return (
    <section className="all-tours-page">
      <Link to="/#tours" className="back-link all-tours-back">
        ← Back to Experiences
      </Link>

      <span className="section-tag">All Tours</span>
      <h1 className="section-title">Every Way to Discover Roatan</h1>

      <div className="all-tours-grid">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`all-tours-card ${pkg.featured ? "featured" : ""}`}
          >
            {pkg.featured && (
              <span className="all-tours-featured-label">
                {pkg.featuredLabel}
              </span>
            )}
            <div className="all-tours-price">
              {pkg.price > 0 ? `$${pkg.price}` : "Quoted"}
              {pkg.price > 0 && <span>pp</span>}
            </div>
            <h3>{pkg.name}</h3>
            <p className="all-tours-tagline">{pkg.tagline}</p>
            <div className="all-tours-tags">
              <span className="all-tours-tag">{pkg.duration}</span>
              {pkg.tags.map((tag, i) => (
                <span key={i} className="all-tours-tag">
                  {tag}
                </span>
              ))}
            </div>
            <Link to={`/tours/${pkg.id}`} className="all-tours-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
