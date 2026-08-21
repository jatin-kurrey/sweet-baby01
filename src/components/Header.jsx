import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Baby,
  User as UserIcon,
  Sparkles,
  Footprints,
  Puzzle,
  Droplet,
  Bed,
  Backpack,
  Gift,
  Sun,
  Cake,
  Heart as HeartIcon,
} from "lucide-react";
import { categories } from "../categoriesData";
import { useCart } from "../context/CartContext";

const iconMap = {
  Baby,
  User: UserIcon,
  Sparkles,
  Footprints,
  Puzzle,
  Droplet,
  Bed,
  Backpack,
  Gift,
  Sun,
  Cake,
  Heart: HeartIcon,
};

function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { cartCount } = useCart();

  const getCategoryIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-little">Sweet</span>
        <span className="logo-nest">Baby's</span>
        <span className="sparkle">✦</span>
      </Link>

      <nav className="desktop-nav">
        <Link to="/" className="active">Home</Link>
        <Link to="/shop">Shop All</Link>
        <div 
          className="categories-link"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={() => setCategoriesOpen(false)}
          onClick={() => setCategoriesOpen(!categoriesOpen)}
        >
          <span>Categories</span> <ChevronDown size={12} />
          {categoriesOpen && (
            <div 
              className="categories-dropdown"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              {categories.map((category) => (
                <Link to={`/category/${category.id}`} className="dropdown-item" key={category.id}>
                  <span className="category-icon">{getCategoryIcon(category.icon)}</span>
                  <div className="category-dropdown-content">
                    <strong>{category.name}</strong>
                    <div className="subcategories">
                      {category.subcategories.map((sub, i) => (
                        <span key={i}>{sub}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/new-arrivals">New Arrivals</Link>
        <Link to="/offers" className="offers">
          Offers <span>Hot</span>
        </Link>
      </nav>

      <div className="header-right">
        <div className="search-box">
          <Search size={18} />
          <input placeholder="Search for products..." />
        </div>

        <Heart size={21} />
        <User size={21} />

        <div className="cart-icon">
          <ShoppingCart size={22} />
          {cartCount > 0 && <span>{cartCount}</span>}
        </div>
      </div>

      <div className="mobile-icons">
        <Menu size={23} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        <Heart size={21} />
        <ShoppingCart size={21} />
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="logo">
              <span className="logo-little">Sweet</span>
              <span className="logo-nest">Baby's</span>
            </div>
            <X size={24} onClick={() => setMobileMenuOpen(false)} />
          </div>
          <nav className="mobile-nav">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="active">Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop All</Link>
            <div className="mobile-categories-section">
              <strong>All Categories</strong>
              {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id} onClick={() => setMobileMenuOpen(false)}>
                  <span>{getCategoryIcon(category.icon)}</span> {category.name}
                </Link>
              ))}
            </div>
            <Link to="/new-arrivals" onClick={() => setMobileMenuOpen(false)}>New Arrivals</Link>
            <Link to="/offers" onClick={() => setMobileMenuOpen(false)} className="offers">Offers <span>Hot</span></Link>
            <Link to="/account" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>Wishlist</Link>
            <Link to="/track-order" onClick={() => setMobileMenuOpen(false)}>Track Order</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
