import React, { useState } from "react";
import { Star, ShoppingCart, Heart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-card">
      {product.discount && (
        <span className="discount">{product.discount}</span>
      )}

      <button 
        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
        onClick={handleWishlist}
      >
        <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
      </button>

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="rating">
          <Star size={13} fill="currentColor" />
          <span>{product.rating}</span>
          <span className="reviews">({product.reviews})</span>
        </div>

        <div className="price-row">
          <strong>{product.price}</strong>

          {product.oldPrice && (
            <del>{product.oldPrice}</del>
          )}

          <button 
            className={`small-cart ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? <Check size={15} /> : <ShoppingCart size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
