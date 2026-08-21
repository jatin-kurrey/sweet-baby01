import React from "react";
import { ArrowRight, Truck } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Sweet Baby's
            <br />
            One Destination <span>♥</span>
          </h1>

          <p>
            For newborns, kids, and moms - discover adorable clothes,
            <br />
            playful toys, school essentials and everything your little one needs.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Shop Now</button>

            <button className="secondary-btn">
              Explore Categories
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="purple-shape"></div>

          <img
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800"
            alt="Happy child"
            className="hero-image"
          />

          <div className="teddy">
            🧸
          </div>
        </div>

        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon yellow">★</div>
            <div>
              <strong>Best Sellers</strong>
              <small>Grab trending items</small>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">
              <Truck size={22} />
            </div>
            <div>
              <strong>Free Delivery</strong>
              <small>On orders above ₹999</small>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon red">♥</div>
            <div>
              <strong>Loved by Parents</strong>
              <small>Over 10,000+ happy families</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
