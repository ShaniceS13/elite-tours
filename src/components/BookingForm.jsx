import useInView from "../hooks/useInView";
import { useState } from "react";
import { packages, tiers } from "../data/packages";

import "../styles/BookingForm.css";

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [groupSize, setGroupSize] = useState(1);
  const [selectedTour, setSelectedTour] = useState("");
  const [paymentType, setPaymentType] = useState("deposit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const [ref, inView] = useInView();
  const selectedPackage = packages.find((pkg) => pkg.name === selectedTour);
  const pricePerPerson = selectedPackage ? selectedPackage.price : 0;
  const totalPrice = pricePerPerson * groupSize;
  const depositAmount = totalPrice * 0.25;
  const amountDue = paymentType === "deposit" ? depositAmount : totalPrice;

  return (
    <section className="book" id="book" ref={ref}>
      <div className={`book-left fade-in ${inView ? "visible" : ""}`}>
        <span className="section-tag">Book Your Experience</span>
        <h2 className="section-title">
          Ready to See <br /> the Island?
        </h2>
        <p>
          Reach out and let us start planning your perfect Roatan experience.
          Whether you're arriving by cruise ship, staying at a resort, or
          visiting family, we'll take care of everything.
        </p>

        <div className="contact-detail">
          <div className="contact-icon">✉</div>
          <div>
            <span className="contact-label">Email</span>

            <a
              href="mailto:info@roatanbyelitetours.com"
              className="contact-value"
            >
              info@roatanbyelitetours.com
            </a>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">📍</div>
          <div>
            <span className="contact-label">Location</span>
            <span className="contact-value">Roatan, Bay Islands, Honduras</span>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">💬</div>
          <div>
            <span className="contact-label">WhatsApp</span>
            <a
              href="https://wa.me/50433877147?text=Hi!%20I'm%20interested%20in%20booking%20a%20tour%20with%20Roat%C3%A1n%20by%20EliTe."
              target="_blank"
              rel="noreferrer"
              className="contact-value"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className={`book-right fade-in ${inView ? "visible" : ""}`}>
        <form
          className="book-form"
          onSubmit={handleSubmit}
          name="booking-inquiry"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="booking-inquiry" />
          <p style={{ display: "none" }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Maria"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Johnson" />
            </div>
          </div>
          {selectedPackage && pricePerPerson > 0 && (
            <div className="form-group price-summary">
              <label>Payment Option</label>
              <div className="payment-toggle">
                <button
                  type="button"
                  className={`payment-btn ${paymentType === "deposit" ? "active" : ""}`}
                  onClick={() => setPaymentType("deposit")}
                >
                  25% Deposit + Pay Rest in Person
                </button>
                <button
                  type="button"
                  className={`payment-btn ${paymentType === "full" ? "active" : ""}`}
                  onClick={() => setPaymentType("full")}
                >
                  Pay in Full Online
                </button>
              </div>

              <div className="price-breakdown">
                <div className="price-line">
                  <span>
                    Total ({groupSize} {groupSize === 1 ? "guest" : "guests"})
                  </span>
                  <span>${totalPrice}</span>
                </div>
                <div className="price-line price-due">
                  <span>
                    {paymentType === "deposit"
                      ? "Deposit Due Now"
                      : "Full Payment Due"}
                  </span>
                  <strong>${amountDue.toFixed(2)}</strong>
                </div>
              </div>

              <p className="quoted-note">
                We'll send you a PayPal invoice for this exact amount once we
                confirm your booking details. Your spot is officially reserved
                once payment is received.
              </p>

              <input type="hidden" name="paymentType" value={paymentType} />
              <input
                type="hidden"
                name="amountDue"
                value={amountDue.toFixed(2)}
              />
            </div>
          )}
          {selectedPackage && pricePerPerson === 0 && (
            <div className="form-group price-summary">
              <p className="quoted-note">
                This package is custom-quoted — we'll follow up with pricing
                based on your group's needs
              </p>
            </div>
          )}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="maria@email.com"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Tour Type</label>
              <select
                name="tourType"
                required
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)}
              >
                <option value="">Select a tour</option>
                {tiers.map((tier) => (
                  <optgroup key={tier.id} label={tier.label}>
                    {packages
                      .filter((pkg) => pkg.tier === tier.id)
                      .map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name}{" "}
                          {pkg.price > 0 ? `- $${pkg.price}pp` : "- Quoted"}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
              <p className="tour-type-note">
                Want a custom trip? Use the{" "}
                <a href="#tours">Build Your Own tool </a>above and we'll turn it
                into a quote.
              </p>
            </div>
            <div className="form-group">
              <label>Group Size</label>
              <div className="size-btns">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`size-btn ${groupSize === n ? "active" : ""}`}
                    onClick={() => setGroupSize(n)}
                  >
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  className={`size-btn ${groupSize === 11 ? "active" : ""}`}
                  onClick={() => setGroupSize(11)}
                >
                  11+
                </button>
              </div>
              <input type="hidden" name="groupSize" value={groupSize} />
            </div>
          </div>
          <div className="form-group">
            <label>Preferred Date</label>
            <input type="date" name="date" />
          </div>
          <div className="form-group">
            <label>Tell Us About Your Group</label>
            <textarea
              name="message"
              placeholder="Arriving by cruise ship? Staying at a resort? Any special requests? Let us know..."
            ></textarea>
          </div>

          {status === "success" && (
            <p className="form-success">
              Thank you!! We'll be in touch shortly with a PayPal invoice — your
              spot is officially reserved once payment is received.
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              Oops! Something went wrong. Please try again or email us directly!
            </p>
          )}

          <button className="form-submit">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
