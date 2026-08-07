import useInView from "../hooks/useInView";
import "../styles/CultureSpotlight.css";

export default function CultureSpotlight() {
  const [ref, inView] = useInView();

  return (
    <section className="culture-spotlight" id="culture" ref={ref}>
      <div className={`culture-content fade-in ${inView ? "visible" : ""}`}>
        <span className="section-tag">Culture & Island Life</span>
        <h2 className="section-title">More Than Just a Destination</h2>
        <p>
          Roatan is more than beaches and blue water — it's an island shaped by
          generations of people who call it home. From the Garifuna community's
          rich traditions of music, dance, and history, to the everyday rhythm
          of island life — fresh catch from local fishermen, Sunday afternoons
          on the porch, neighbors who feel like family — this island's culture
          runs deep.
        </p>
        <p>
          As locals ourselves, rooted right here in Politilly Bight, we don't
          just show you Roatan, we share it — the real island, not just the
          postcard.
        </p>
      </div>

      <div className={`culture-img fade-in ${inView ? "visible" : ""}`}>
        <div className="culture-placeholder">Photo/Video Coming Soon</div>
      </div>
    </section>
  );
}
