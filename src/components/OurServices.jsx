import useInView from "../hooks/useInView";
import "../styles/OurServices.css";

const services = [
  {
    title: "Cruise Passenger Tours",
    description:
      "Docking for the day? We'll pick you up right from your cruise terminal and have you back in plenty of time to reboard.",
    accent: "var(--teal)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M3 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"
          strokeLinecap="round"
        />
        <path
          d="M5 17l1-8h12l1 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 9V4h6v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Hotel Guest Tours",
    description:
      "Staying at a resort or hotel? We'll arrange pickup directly from your accommodation for a seamless start to your day.",
    accent: "var(--gold)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M4 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10h6a1 1 0 0 1 1 1v10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 9h.01M8 13h.01M8 17h.01" strokeLinecap="round" />
        <path d="M15 14h.01M15 18h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom Private Tours",
    description:
      "Want the island entirely on your terms? We'll build a fully custom itinerary just for you and your group.",
    accent: "var(--teal-light)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9l-2 6-6 2 2-6 6-2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Airport / Ferry Shuttle Service",
    description:
      "Arriving or departing by air or ferry? Let us handle your transportation to and from the airport or ferry terminal.",
    accent: "var(--gold-light)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          d="M10.5 20l1.5-6-8-1 1.5-2 6.5.5 3-6.5c.4-.9 1.7-.9 2.1 0l.4 1c.2.5.1 1.1-.3 1.5L14 12l6.5.5 1.5 2-8-1 1.5 6-2 1-1.5-4-1.5 4-2-1z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function OurServices() {
  const [ref, inView] = useInView();

  return (
    <section className="our-services" id="services" ref={ref}>
      <span className="section-tag">What We Offer</span>
      <h2 className={`section-title fade-in ${inView ? "visible" : ""}`}>
        Our Services
      </h2>

      <div className="services-grid">
        {services.map((service, i) => (
          <div
            key={i}
            className={`service-card fade-in ${inView ? "visible" : ""}`}
            style={{
              "--accent": service.accent,
              transitionDelay: inView ? `${i * 0.1}s` : "0s",
            }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
