import "../styles/CancellationPolicy.css";

export default function CancellationPolicy() {
  return (
    <section className="cancellation-policy" id="policy">
      <span className="section-tag">Good to Know</span>
      <h2 className="section-title">Cancellation & Refund Policy</h2>

      <div className="policy-grid">
        <div className="policy-col">
          <div className="policy-block">
            <h3>Payment Options</h3>
            <p>
              A 25% deposit is required to secure your booking, paid instantly
              via PayPal. For the remaining balance, you choose:
            </p>
            <ul>
              <li>
                <strong>Deposit + Pay Rest In Person</strong> — pay 25% now,
                settle the rest in cash on the day of your tour
              </li>
              <li>
                <strong>Pay in Full Online</strong> — pay 100% upfront via
                PayPal, nothing due day-of
              </li>
            </ul>
          </div>

          <div className="policy-block">
            <h3>Full Refund</h3>
            <p>You'll receive a full refund of any amount paid if:</p>
            <ul>
              <li>You cancel at least 24 hours before your scheduled tour</li>
              <li>Your cruise ship is unable to dock in Roatán</li>
              <li>
                Weather conditions make the tour unsafe (determined by us, for
                your safety)
              </li>
              <li>
                A medical emergency prevents you from attending, with
                documentation from a doctor or the ship's medical staff
              </li>
            </ul>
          </div>
        </div>

        <div className="policy-col">
          <div className="policy-block">
            <h3>No Refund</h3>
            <ul>
              <li>
                Cancellations made less than 24 hours before your scheduled tour
              </li>
              <li>
                No-shows (not arriving at the agreed pickup time/location)
              </li>
            </ul>
          </div>

          <div className="policy-block">
            <h3>Rescheduling</h3>
            <p>
              Need to change your date instead of canceling? Contact us as early
              as possible — we'll do our best to accommodate based on
              availability, at no extra charge.
            </p>
          </div>

          <div className="policy-block">
            <h3>How Refunds Are Processed</h3>
            <p>
              Approved refunds are processed within 2-3 business days and
              returned to your original PayPal payment method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
