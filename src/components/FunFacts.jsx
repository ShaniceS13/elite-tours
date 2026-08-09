import { useState } from "react";
import { funFacts } from "../data/funFacts";
import useInView from "../hooks/useInView";
import "../styles/FunFacts.css";

const cardColors = [
  "card-coral",
  "card-marigold",
  "card-aqua",
  "card-plum",
  "card-denim",
  "card-rose",
  "card-olive",
];

export default function FunFacts() {
  const [ref, inView] = useInView();
  const [index, setIndex] = useState(0);
  const total = funFacts.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const getOffset = (i) => {
    let diff = i - index;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="fun-facts" id="fun-facts" ref={ref}>
      <span className="section-tag">Did You Know?</span>
      <h2 className={`section-title fade-in ${inView ? "visible" : ""}`}>
        Fun Facts About Roatan
      </h2>

      <div className={`fun-facts-carousel fade-in ${inView ? "visible" : ""}`}>
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goPrev}
          aria-label="Previous fact"
        >
          ‹
        </button>

        <div className="fun-facts-viewport">
          <div className="fun-facts-track">
            {funFacts.map((fact, i) => {
              const offset = getOffset(i);
              if (offset < -1 || offset > 1) return null;
              const position =
                offset === 0 ? "active" : offset === -1 ? "prev" : "next";
              return (
                <div
                  key={i}
                  className={`fun-fact-card ${cardColors[i % cardColors.length]} fun-fact-card--${position}`}
                >
                  <p>{fact.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goNext}
          aria-label="Next fact"
        >
          ›
        </button>
      </div>

      <div className="fun-facts-dots">
        {funFacts.map((_, i) => (
          <button
            key={i}
            className={`fun-facts-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to fact ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
