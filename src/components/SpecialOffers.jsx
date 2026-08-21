import React from "react";
import { ArrowRight, Tag } from "lucide-react";

const specialOffers = [
  {
    title: "Summer Sale",
    discount: "UP TO 50% OFF",
    description: "On all summer collection",
    color: "#ff6b6b",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400",
  },
  {
    title: "Bundle Deal",
    discount: "BUY 2 GET 1 FREE",
    description: "On selected toys",
    color: "#4ecdc4",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
  },
];

function SpecialOffers() {
  return (
    <section className="section offers-section">
      <div className="section-header">
        <h2>Special Offers</h2>
        <button className="view-all">
          View All <ArrowRight size={15} />
        </button>
      </div>
      <div className="offers-grid">
        {specialOffers.map((offer, index) => (
          <div className="offer-card" key={index} style={{ background: offer.color }}>
            <div className="offer-content">
              <span className="offer-tag">
                <Tag size={14} />
                Limited Time
              </span>
              <h3>{offer.title}</h3>
              <p className="offer-discount">{offer.discount}</p>
              <p className="offer-desc">{offer.description}</p>
              <button>Shop Now</button>
            </div>
            <div className="offer-image">
              <img src={offer.image} alt={offer.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
