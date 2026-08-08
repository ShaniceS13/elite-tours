import useInView from "../hooks/useInView";
import "../styles/LocalRecommendations.css";

export default function LocalRecommendations() {
  const [ref, inView] = useInView();

  return (
    <section className="local-recs" id="local-recs" ref={ref}>
      <div className={`local-recs-content fade-in ${inView ? "visible" : ""}`}>
        <span className="section-tag">While You're Here</span>
        <h2 className="section-title">Local Recommendations</h2>
        <p className="local-recs-intro">
          A few local favorites we personally trust:
        </p>

        <div className="local-recs-grid">
          <a
            href="https://roataninsiderconcerge.com/"
            target="_blank"
            rel="noreferrer"
            className="local-rec-card"
          >
            <h3>The Roatan Insider</h3>
            <p>
              Looking for private charters, curated excursions, or help planning
              the rest of your trip? A concierge service offering private boat
              charters, off-the-beaten-path experiences, and island
              accommodations.
            </p>
            <span className="local-rec-link">Visit Site →</span>
          </a>

          <a
            href="https://thesexymermaidroatan.com/"
            target="_blank"
            rel="noreferrer"
            className="local-rec-card"
          >
            <h3>A&S Restaurant (The Sexy Mermaid)</h3>
            <p>
              Craving fresh, local Caribbean flavor after your tour? This is one
              of our favorite spots on the island for great food and good vibes.
            </p>
            <span className="local-rec-link">Visit Site →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
