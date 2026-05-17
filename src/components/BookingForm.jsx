import { useState } from "react";

import "../styles/BookingForm.css";

export default function BookingForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mlgvedbn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="book" id="book">
      <div className="book-left">
        <span className="section-tag">Book Your Experience</span>
        <h2 className="section-title">
          Ready to See <br /> the Island?
        </h2>
        <p>
          Reach out and let us start planning youir perfect Roatan experience.
          Whether you're arriving by cruise ship, staying at a resort, or
          visitng family, we'll take care of everything.
        </p>
        <div className="contact-detail">
          <div className="contact-icon">✉</div>
          <div>
            <span className="contact-label">Email</span>
            <span className="contact-value">info@elitetours.hn</span>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div>
              <span className="contact-label">Location</span>
              <span className="contact-value">
                Roatan, Bay Islands, Honduras
              </span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-icon">💬</div>
            <div>
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">Coming soon</span>
            </div>
          </div>
        </div>

        <div className="book-right">
          <form className="book-form" onSubmit={handleSubmit}>
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
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" name="email" placeholder="maria@email.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Tour Type</label>
                <select
                  name="tourType"
                  value={form.tourType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a tour</option>
                  <optgroup label="The Classics">
                    <option>The Sweet Escape - $55pp</option>
                    <option>Island Hello - $65pp</option>
                  </optgroup>
                  <optgroup label="Elite Experience">
                    <option>Into the Wild - $85pp</option>
                    <option>Below the Surface - $85pp</option>
                    <option>Ride the Island - $95pp</option>
                  </optgroup>
                  <optgroup label="Island Premium">
                    <option>Sky, Sea & Soul - $110pp</option>
                    <option>The Full Rush - $120pp</option>
                    <option>Above it All - $120pp</option>
                    <option>Horseback & Horizon - $120pp</option>
                  </optgroup>
                  <optgroup label="Private & Custom">
                    <option>The EliTe Private - $150pp</option>
                    <option>The Family Legacy - Quoted</option>
                  </optgroup>
                  <optgroup label="Build Your Own">
                    <option>Build Your Own Adventure</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group">
                <label>Group Size</label>
                <select name="groupSize">
                  <option>1-4</option>
                  <option>5-11</option>
                  <option>12-20</option>
                  <option>20+</option>
                </select>
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
                Oops! Something went wrong. Please try again or email us
                directly!
              </p>
            )}

            <button className="form-submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
