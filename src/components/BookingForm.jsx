import "../styles/BookingForm.css";

export default function BookingForm() {
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
          <div className="book-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Maria" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Johnson" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="text" placeholder="maria@email.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Tour Type</label>
                <select>
                  <option>Island Highlight</option>
                  <option>Cruise Shore Excursion</option>
                  <option>Private Family Tour</option>
                  <option>Cultural & Heritage</option>
                  <option>Sunset Experience</option>
                  <option>Custom Tour</option>
                </select>
              </div>
              <div className="form-group">
                <label>Group Size</label>
                <select>
                  <option>1-4</option>
                  <option>5-11</option>
                  <option>12-20</option>
                  <option>20+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Tell Us About Your Group</label>
              <textarea placeholder="Arriving by cruise ship? Staying at a resort? Any special requests? Let us know..."></textarea>
            </div>
            <button className="form-submit">Send Inquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
}
