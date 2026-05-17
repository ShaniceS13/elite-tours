import { useState } from "react";
import { packages, tiers } from "../data/packages";
import { activities } from "../data/activities";
import "../styles/Experiences.css";

export default function Experiences() {
  const [activeTier, setActiveTier] = useState("t1");
  const [selectedActivities, setSelectedActivities] = useState([]);

  const filteredPackages = packages.filter((pkg) => pkg.tier === activeTier);

  const toggleActivity = (activity) => {
    if (selectedActivities.find((a) => a.id === activity.id)) {
      setSelectedActivities(
        selectedActivities.filter((a) => a.id !== activity.id),
      );
    } else {
      setSelectedActivities([...selectedActivities, acivity]);
    }
  };

  const isSelected = (activity) => {
    return selectedActivities.find((a) => a.id === activity.id);
  };

  const totalPrice =
    32 + selectedActivities.reduce((sum, a) => sum + a.price, 0);

  return (
    <section className="experiences" id="tours">
      <div className="experiences-header">
        <span className="section-tag">Experiences</span>
        <h2 className="section-title">
          Discover Roatan
          <br />
          Your Way
        </h2>
        <p className="experiences-sub">
          Choose a curated package or build your own adventure, every experience
          includes round-trip transport in our air-conditioned fleet and a local
          guide who knows this island by heart.
        </p>
      </div>

      {/* Tier Tabs */}
      <div className="tier-tabs">
        {tiers.map((tier) => (
          <button
            key={tier.id}
            className={`tier-tab ${activeTier === tier.id ? "active" : ""}`}
            onClick={() => setActiveTier(tier.id)}
          >
            {tier.label}
          </button>
        ))}

        <button
          className={`tier-tab ${activeTier === "builder" ? " active" : ""}`}
          onClick={() => setActiveTier("builder")}
        >
          Build Your Own
        </button>
      </div>

      {/* Package Cards */}
      {activeTier !== "builder" && (
        <div className="pkg-grid">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`pkg-card ${pkg.featured ? "featured" : ""}`}
            >
              {pkg.featured && (
                <span className="pkg-featured-label">{pkg.featuredLabel}</span>
              )}
              <div className="pkg-price">
                {pkg.price > 0 ? `$${pkg.price}` : "Quoted"}
                {pkg.price > 0 && <span>pp</span>}
              </div>
              <h3>{pkg.name}</h3>
              <p className="pkg-tagline">{pkg.tagline}</p>
              <ul className="pkg-includes">
                {pkg.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="pkg-tags">
                <span className="pkg-tag">{pkg.duration}</span>
                {pkg.tags.map((tag, i) => (
                  <span key={i} className="pkg-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#book" className="pkg-btn">
                {pkg.tier === "t4" ? "Request a Quote" : "Book This Package"}
              </a>
            </div>
          ))}
        </div>
      )}

      {/*Build Your Own */}
      {activeTier === "builder" && (
        <div className="builder-wrap">
          <div className="builder-grip">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`activity-card ${isSelected(activity) ? "selected" : ""}`}
                onClick={() => toggleActivity}
              >
                <div className="activity-check">✓</div>
                <div className="activity-name">{activity.name}</div>
                <div className="activity-price">
                  {activity.price > 0
                    ? `+ $${activity.price} pp`
                    : "Included W/ transport"}
                </div>
              </div>
            ))}
          </div>

          <div className="builder-summary">
            <h4>Your Adventure</h4>
            {selectedActivities.length === 0 ? (
              <p className="empty-msg">Select activities to get started</p>
            ) : (
              <>
                {" "}
                <div className="selected-list">
                  {selectedActivities.map((a) => (
                    <div key={a.id} className="selected-item">
                      <span>{a.name}</span>
                      <span>{a.price > 0 ? `$${a.price}` : "incl."}</span>
                    </div>
                  ))}
                </div>
                <div className="summary-total">
                  <span>Estimated total</span>
                  <strong>${totalPrice}</strong>
                </div>
                <a href="#book" className="pkg-btn">
                  Request This Custom Tour
                </a>
              </>
            )}
            <p className="summary-note">
              Final pricing confirmed on booking. Includes round-trip A/C
              transport.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
