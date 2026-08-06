import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../data/faqs";
import "../styles/FAQPage.css";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <span className="section-tag">Good to Know</span>
      <h1 className="section-title">Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(i)}>
              {faq.question}
              <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
