import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { categories } from "../categoriesData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <Link to="/" className="logo">
            <span className="logo-little">Sweet</span>
            <span className="logo-nest">Baby's</span>
            <span className="sparkle">✦</span>
          </Link>
          <p>One destination for newborns, kids, and moms. Quality products, happy families!</p>
          <div className="social-links">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><ChevronRight size={12} /> Home</Link></li>
            <li><Link to="/shop"><ChevronRight size={12} /> Shop All</Link></li>
            <li><Link to="/new-arrivals"><ChevronRight size={12} /> New Arrivals</Link></li>
            <li><Link to="/offers"><ChevronRight size={12} /> Sale</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            {categories.slice(0, 6).map((category) => (
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>
                  <ChevronRight size={12} /> {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <MapPin size={16} />
              <span>123 Kids Street, Mumbai, India</span>
            </li>
            <li>
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={16} />
              <span>hello@sweetbabys.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Sweet Baby's. All rights reserved. Made with ♥ for little ones.</p>
      </div>
    </footer>
  );
}

export default Footer;
