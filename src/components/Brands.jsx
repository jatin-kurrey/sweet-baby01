import React from "react";

const brands = [
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=150",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=150",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=150",
];

function Brands() {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <p>Trusted by leading brands</p>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
