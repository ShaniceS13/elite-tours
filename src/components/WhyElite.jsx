import useInView from "../hooks/useInView";
import "../styles/WhyElite.css";

export default function WhyElite() {
  const reasons = [
    {
      number: "01",
      title: "Family Owned",
      text: "Every tour carries the warmth and personal care of a family business. You are never just a ticket to us.",
    },
    {
      number: "02",
      title: "Island Roots",
      text: "We are from Roatan. We know this island, its hidden beaches, its real stories, its people.",
    },
    {
      number: "03",
      title: "Luxury Standard",
      text: "Modern, air-conditioned vehicles. Professional guides. An elevated experience at every stop.",
    },
    {
      number: "04",
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
            <div className="why-num">{reason.number}</div>
            <h4>{reason.title}</h4>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
