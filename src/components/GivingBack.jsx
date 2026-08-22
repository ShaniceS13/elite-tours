import useInView from "../hooks/useInView";
import ImageSlideshow from "./ImageSlideshow";
import "../styles/GivingBack.css";

export default function GivingBack() {
  const [ref, inView] = useInView();

  const givingBackImages = [
    "/images/giving-back-1.jpg",
    "/images/giving-back-2.jpg",
  ];

  return (
    <section className="giving-back" id="giving-back" ref={ref}>
      <div className={`giving-back-img fade-in ${inView ? "visible" : ""}`}>
        <ImageSlideshow
          images={givingBackImages}
          altPrefix="EliTe Tours giving back in the Roatan community"
          interval={6000}
        />
      </div>

      <div className={`giving-back-content fade-in ${inView ? "visible" : ""}`}>
        <span className="section-tag">Giving Back</span>
        <h2 className="section-title">Community Commitment</h2>
        <p>
          Roatan has given us so much, and we believe in giving back. That's why
          5% of every tour booked with us goes directly toward Tete's Loving
          Project, our own community giving initiative, collecting and
          delivering donations to families in need across the island. It's not a
          big organization — just us, doing what Tete would have done.
        </p>
        <p>
          We've had the honor of working with local schools and the hospital in
          Politilly Bight, and giving back isn't just something we do, it's part
          of who we are.
        </p>
      </div>
    </section>
  );
}
