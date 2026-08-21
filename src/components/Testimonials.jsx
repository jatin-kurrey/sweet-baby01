import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Amazing quality clothes for my little one! The delivery was super fast and the fabric is so soft. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    text: "Best kids store online! My daughter loves the toys and the school supplies are top-notch. Will definitely shop again.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    name: "Anita Patel",
    location: "Bangalore",
    rating: 4,
    text: "Great collection and reasonable prices. The customer service is excellent. They helped me choose the perfect birthday gift!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
];

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-header">
        <h2>What Parents Say</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">
              <Quote size={24} />
            </div>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.location}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
