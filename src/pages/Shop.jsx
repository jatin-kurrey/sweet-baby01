import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../productsData";
import { categories } from "../categoriesData";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (priceRange !== "all") {
      const price = parseInt(product.price.replace(/[₹,]/g, ""));
      if (priceRange === "under500" && price >= 500) return false;
      if (priceRange === "500-1000" && (price < 500 || price > 1000)) return false;
      if (priceRange === "above1000" && price <= 1000) return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") {
      return parseInt(a.price.replace(/[₹,]/g, "")) - parseInt(b.price.replace(/[₹,]/g, ""));
    }
    if (sortBy === "price-high") {
      return parseInt(b.price.replace(/[₹,]/g, "")) - parseInt(a.price.replace(/[₹,]/g, ""));
    }
    if (sortBy === "rating") {
      return parseFloat(b.rating) - parseFloat(a.rating);
    }
    return 0;
  });

  return (
    <div className="app">
      <Header />
      <main className="page-main">
        <div className="page-header">
          <h1>Shop All</h1>
          <p>Discover our complete collection for newborns, kids, and moms</p>
        </div>
        
        <div className="shop-layout">
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>×</button>
            </div>
            
            <div className="filter-section">
              <h4>Categories</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={selectedCategory === "all"}
                    onChange={() => setSelectedCategory("all")}
                  />
                  <span>All Categories</span>
                </label>
                {categories.map((cat) => (
                  <label className="filter-option" key={cat.id}>
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                    />
                    <span>{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="all"
                    checked={priceRange === "all"}
                    onChange={() => setPriceRange("all")}
                  />
                  <span>All Prices</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="under500"
                    checked={priceRange === "under500"}
                    onChange={() => setPriceRange("under500")}
                  />
                  <span>Under ₹500</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="500-1000"
                    checked={priceRange === "500-1000"}
                    onChange={() => setPriceRange("500-1000")}
                  />
                  <span>₹500 - ₹1,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="above1000"
                    checked={priceRange === "above1000"}
                    onChange={() => setPriceRange("above1000")}
                  />
                  <span>Above ₹1,000</span>
                </label>
              </div>
            </div>
          </aside>

          <div className="shop-content">
            {selectedCategory === "all" && (
              <div className="promo-banners">
                <div className="promo-banner banner-1">
                  <div className="promo-content">
                    <span className="promo-badge">NEW ARRIVAL</span>
                    <h3>Summer Collection</h3>
                    <p>Up to 40% OFF on summer essentials</p>
                    <button>Shop Now</button>
                  </div>
                  <img src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400" alt="Summer Collection" />
                </div>
                <div className="promo-banner banner-2">
                  <div className="promo-content">
                    <span className="promo-badge">BEST SELLER</span>
                    <h3>Baby Care Essentials</h3>
                    <p>Everything your little one needs</p>
                    <button>Explore</button>
                  </div>
                  <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400" alt="Baby Care" />
                </div>
              </div>
            )}

            <div className="shop-toolbar">
              <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal size={18} />
                Filters
              </button>
              <div className="results-count">
                Showing {sortedProducts.length} products
              </div>
              <div className="sort-dropdown">
                <span>Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="products-grid">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found matching your filters.</p>
                <button onClick={() => { setSelectedCategory("all"); setPriceRange("all"); }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
