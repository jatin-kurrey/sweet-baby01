import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NewArrivals from "./pages/NewArrivals";
import Offers from "./pages/Offers";
import Category from "./pages/Category";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;