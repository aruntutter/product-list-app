import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <div className="price-rating">
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
