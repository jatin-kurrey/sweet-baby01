import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../productsData";
import { categories } from "../categoriesData";
import { ArrowRight, SlidersHorizontal } from "lucide-react";

function Category() {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id === categoryId);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  if (!category) {
    return (
      <div className="app">
        <Header />
        <main className="page-main">
          <div className="page-header">
            <h1>Category Not Found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  let categoryProducts = products.filter(p => p.category === categoryId);

  if (selectedSubcategory !== "all") {
    categoryProducts = categoryProducts.filter(p => {
      const subcategoryIndex = category.subcategories.indexOf(selectedSubcategory);
      return subcategoryIndex !== -1;
    });
  }

  const sortedProducts = [...categoryProducts].sort((a, b) => {
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
        <div className="category-page-header">
          <div className="category-hero">
            <img src={category.image} alt={category.name} />
            <div className="category-hero-content">
              <h1>{category.name}</h1>
              <p>{category.subcategories.join(" • ")}</p>
            </div>
          </div>
        </div>

        <div className="category-layout">
          <aside className={`category-filters ${showFilters ? 'show' : ''}`}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>×</button>
            </div>
            
            <div className="filter-section">
              <h4>Subcategories</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="subcategory"
                    value="all"
                    checked={selectedSubcategory === "all"}
                    onChange={() => setSelectedSubcategory("all")}
                  />
                  <span>All</span>
                </label>
                {category.subcategories.map((sub) => (
                  <label className="filter-option" key={sub}>
                    <input
                      type="radio"
                      name="subcategory"
                      value={sub}
                      checked={selectedSubcategory === sub}
                      onChange={() => setSelectedSubcategory(sub)}
                    />
                    <span>{sub}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="category-content">
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
                <p>No products found in this subcategory.</p>
                <button onClick={() => setSelectedSubcategory("all")}>
                  View All Products
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

export default Category;
