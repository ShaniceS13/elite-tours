import useInView from "../hooks/useInView";
import { useState, useEffect, useRef } from "react";
import { packages, tiers } from "../data/packages";

import "../styles/BookingForm.css";

const PAYPAL_CLIENT_ID =
  "AefMxSwIl20gJyd5m92bKrQkMPazAG_Z6cZ5dkXsFzqCLDCDW0p3NdfDzwQvUMt0vOUhUg24g2pHS3ky"; // Sandbox — swap for Live Client ID when ready
const PAYPAL_SANDBOX = true; // flip to false when going live

export default function BookingForm() {
  const [status, setStatus] = useState("");
  const [groupSize, setGroupSize] = useState(1);
  const [selectedTour, setSelectedTour] = useState("");
  const [paymentType, setPaymentType] = useState("deposit");
  const [paymentDone, setPaymentDone] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);

  const [ref, inView] = useInView();
  const selectedPackage = packages.find((pkg) => pkg.name === selectedTour);
  const pricePerPerson = selectedPackage ? selectedPackage.price : 0;
  const totalPrice = pricePerPerson * groupSize;
  const depositAmount = totalPrice * 0.25;
  const amountDue = paymentType === "deposit" ? depositAmount : totalPrice;
  const paymentRequired = selectedPackage && pricePerPerson > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paymentRequired && !paymentDone) {
      return;
    }

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

  // Keep the latest values available to the PayPal click handler
  const amountDueRef = useRef(amountDue);
  const selectedTourRef = useRef(selectedTour);
  const paymentTypeRef = useRef(paymentType);
  useEffect(() => {
    amountDueRef.current = amountDue;
  }, [amountDue]);
  useEffect(() => {
    selectedTourRef.current = selectedTour;
  }, [selectedTour]);
  useEffect(() => {
    paymentTypeRef.current = paymentType;
  }, [paymentType]);

  const paypalButtonRef = useRef(null);
  const sdkInstanceRef = useRef(null);
  const sessionSetUpRef = useRef(false);

  // Load the PayPal v6 SDK script once
  useEffect(() => {
    if (document.getElementById("paypal-sdk-v6")) {
      setPaypalReady(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk-v6";
    script.src = PAYPAL_SANDBOX
      ? "https://www.sandbox.paypal.com/web-sdk/v6/core"
      : "https://www.paypal.com/web-sdk/v6/core";
    script.onload = () => setPaypalReady(true);
    document.body.appendChild(script);
  }, []);

  // Set up the PayPal button once, when the SDK + button element both exist
  useEffect(() => {
    if (
      !paypalReady ||
      !paymentRequired ||
      paymentDone ||
      !paypalButtonRef.current ||
      sessionSetUpRef.current
    ) {
      return;
    }

    sessionSetUpRef.current = true;

    (async () => {
      try {
        sdkInstanceRef.current = await window.paypal.createInstance({
          clientId: PAYPAL_CLIENT_ID,
          components: ["paypal-payments"],
        });

        const paymentSession =
          sdkInstanceRef.current.createPayPalOneTimePaymentSession({
            onApprove: async (data) => {
              try {
                const captureRes = await fetch(
                  "/.netlify/functions/paypal-capture-order",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ orderId: data.orderId }),
                  },
                );
                const captureData = await captureRes.json();

                if (captureRes.ok && captureData.status === "COMPLETED") {
                  setPaymentDone(true);
                } else {
                  setStatus("error");
                }
              } catch (err) {
                console.error("Capture error:", err);
                setStatus("error");
              }
            },
            onCancel: () => {
              // Customer closed the PayPal window without paying — no error needed
            },
            onError: (err) => {
              console.error("PayPal payment error:", err);
              setStatus("error");
            },
          });

        const buttonEl = paypalButtonRef.current;
        buttonEl.removeAttribute("hidden");

        buttonEl.addEventListener("click", async () => {
          try {
            await paymentSession.start(
              { presentationMode: "auto" },
              (async () => {
                const orderRes = await fetch(
                  "/.netlify/functions/paypal-create-order",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      amount: amountDueRef.current.toFixed(2),
                      description: `${selectedTourRef.current} — ${
                        paymentTypeRef.current === "deposit"
                          ? "25% Deposit"
                          : "Full Payment"
                      }`,
                    }),
                  },
                );
                const orderData = await orderRes.json();
                return { orderId: orderData.orderId };
              })(),
            );
          } catch (err) {
            console.error("PayPal start error:", err);
            setStatus("error");
          }
        });
      } catch (err) {
        console.error("PayPal SDK init error:", err);
      }
    })();
  }, [paypalReady, paymentRequired, paymentDone]);

  // Reset so a fresh session sets up if the customer deselects/reselects a tour
  useEffect(() => {
    if (!paymentRequired) {
      sessionSetUpRef.current = false;
    }
  }, [paymentRequired]);

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
              <input type="text" name="firstName" placeholder="Maria" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Johnson" />
            </div>
          </div>
          {paymentRequired && (
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

              {paymentDone ? (
                <p className="paypal-paid-note">
                  ✓ Payment received — now send your inquiry below to confirm
                  your booking details!
                </p>
              ) : (
                <paypal-button
                  ref={paypalButtonRef}
                  hidden
                  className="paypal-button-box"
                ></paypal-button>
              )}

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
            <input type="text" name="email" placeholder="maria@email.com" />
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
              Thank you!! We'll be in touch shortly to confirm your booking!
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              Oops! Something went wrong. Please try again or email us directly!
            </p>
          )}

          <button
            className="form-submit"
            disabled={paymentRequired && !paymentDone}
          >
            {paymentRequired && !paymentDone
              ? "Complete Payment to Send Inquiry"
              : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
