import React from "react";
import { Mail, Sparkles } from "lucide-react";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <Mail size={40} />
          </div>
          <h2>Join Our Family</h2>
          <p>Subscribe to get exclusive offers, parenting tips, and early access to new arrivals!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>
              Subscribe <Sparkles size={16} />
            </button>
          </div>
          <small>Get 10% off your first order!</small>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
