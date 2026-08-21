import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../productsData";
import { Clock, Tag, Sparkles } from "lucide-react";

function Offers() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offerProducts = products.filter(p => p.discount);

  return (
    <div className="app">
      <Header />
      <main className="page-main">
        <div className="offers-hero">
          <div className="offers-hero-content">
            <span className="offers-badge">
              <Sparkles size={16} />
              LIMITED TIME OFFER
            </span>
            <h1>Mega Sale</h1>
            <p>Up to 50% OFF on selected items</p>
            
            <div className="countdown-timer">
              <Clock size={20} />
              <div className="time-block">
                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                <small>Days</small>
              </div>
              <span>:</span>
              <div className="time-block">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <small>Hours</small>
              </div>
              <span>:</span>
              <div className="time-block">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <small>Mins</small>
              </div>
              <span>:</span>
              <div className="time-block">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <small>Secs</small>
              </div>
            </div>
          </div>
          <div className="offers-hero-image">
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" alt="Sale" />
          </div>
        </div>

        <div className="page-header">
          <h1>Special Offers</h1>
          <p>Grab these amazing deals before they're gone!</p>
        </div>

        <div className="products-grid">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="offer-features">
          <div className="offer-feature">
            <Tag size={24} />
            <div>
              <strong>Best Prices</strong>
              <small>Guaranteed lowest prices</small>
            </div>
          </div>
          <div className="offer-feature">
            <Clock size={24} />
            <div>
              <strong>Limited Time</strong>
              <small>Offers end soon</small>
            </div>
          </div>
          <div className="offer-feature">
            <Sparkles size={24} />
            <div>
              <strong>Top Quality</strong>
              <small>Premium products only</small>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Offers;
