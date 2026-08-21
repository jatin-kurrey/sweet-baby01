import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../productsData";

function NewArrivals() {
  const newArrivals = products.slice(0, 6);

  return (
    <div className="app">
      <Header />
      <main className="page-main">
        <div className="page-header">
          <h1>New Arrivals</h1>
          <p>Fresh picks for your little ones - just in!</p>
        </div>
        <div className="products-grid">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NewArrivals;
