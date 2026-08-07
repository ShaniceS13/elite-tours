import useInView from "../hooks/useInView";
import { funFacts } from "../data/funFacts";
import "../styles/FunFacts.css";

export default function FunFacts() {
  const [ref, inView] = useInView();

  return (
    <section className="fun-facts" id="fun-facts" ref={ref}>
      <span className="section-tag">Did You Know?</span>
      <h2 className={`section-title fade-in ${inView ? "visible" : ""}`}>
        Fun Facts About Roatan
      </h2>

      <div className={`fun-facts-grid fade-in ${inView ? "visible" : ""}`}>
        {funFacts.map((fact, i) => (
          <div key={i} className="fun-fact-card">
            <span className="fun-fact-number">{fact.number}</span>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
