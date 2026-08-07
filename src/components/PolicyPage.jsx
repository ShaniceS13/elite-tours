import { Link } from "react-router-dom";
import CancellationPolicy from "./CancellationPolicy";
import "../styles/PolicyPage.css";

export default function PolicyPage() {
  return (
    <div className="policy-page">
      <Link to="/" className="back-link policy-back-link">
        ← Back to Home
      </Link>
      <CancellationPolicy />
    </div>
  );
}
