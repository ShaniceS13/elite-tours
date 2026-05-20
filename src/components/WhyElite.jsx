import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";
import "../styles/WhyElite.css";

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    const duration = 1500;
    const increment = end / (duration / 8);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div className="why-num" ref={ref}>
      {String(count).padStart(2, "0")}
    </div>
  );
}

export default function WhyElite() {
  const reasons = [
    {
      number: "1",
      title: "Family Owned",
      text: "Every tour carries the warmth and personal care of a family business. You are never just a ticket to us.",
    },
    {
      number: "2",
      title: "Island Roots",
      text: "We are from Roatan. We know this island, it's hidden beaches, its real stories, it's people.",
    },
    {
      number: "3",
      title: "Luxury Standard",
      text: " Modern, air-conditioned vehicles. Professional guides. An elevated experience at every stop",
    },
    {
      number: "4",
      title: "Purpose-Driven",
      text: "This business was built with intention and faith. Every mile we drive carries a legacy of love.",
    },
  ];

  const [ref, inView] = useInView();

  return (
    <section className="why" id="why" ref={ref}>
      <span className="section-tag">Why Elite</span>
      <h2 className={`section-title fade-in ${inView ? "visible" : ""}`}>
        The EliTe Difference
      </h2>
      <div className={`why-grid fade-in ${inView ? "visible" : ""}`}>
        {reasons.map((reason) => (
          <div className="why-item" key={reason.number}>
            <AnimatedNumber target={reason.number} />
            <h4>{reason.title}</h4>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
