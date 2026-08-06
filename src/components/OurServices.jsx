import useInView from "../hooks/useInView";
import "../styles/OurServices.css";

export default function OurServices() {
  const [ref, inView] = useInView();

  const services = [
    {
      title: "Cruise Passenger Tours",
      description:
        "Docking for the day? We'll pick you up right from your cruise terminal and have you back in plenty of time to reboard.",
    },
    {
      title: "Hotel Guest Tours",
      description:
        "Staying at a resort or hotel? We'll arrange pickup directly from your accommodation for a seamless start to your day.",
    },
    {
      title: "Custom Private Tours",
      description:
        "Want the island entirely on your terms? We'll build a fully custom itinerary just for you and your group.",
    },
    {
      title: "Airport / Ferry Shuttle Service",
      description:
        "Arriving or departing by air or ferry? Let us handle your transportation to and from the airport or ferry terminal.",
    },
  ];

  return (
    <section className="our-services" id="services" ref={ref}>
      <span className="section-tag">What We Offer</span>
      <h2 className={`section-title fade-in ${inView ? "visible" : ""}`}>
        Our Services
      </h2>

      <div className={`services-grid fade-in ${inView ? "visible" : ""}`}>
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
