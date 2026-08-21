import React from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../productsData";

function Trending() {
  return (
    <section className="section trending-section">
      <div className="section-header">
        <h2>Trending for Little Ones</h2>

        <button className="view-all">
          View All <ArrowRight size={15} />
        </button>
      </div>

      <div className="trending-content">
        <div className="products">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="school-banner">
          <div className="banner-content">
            <span className="pencil">✏️</span>

            <h2>BACK TO SCHOOL</h2>

            <p>Make their first day</p>
            <p>extra special!</p>

            <strong>Up to <span>40% OFF</span></strong>

            <button>Shop School Essentials</button>
          </div>

          <div className="school-bag">🎒</div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
