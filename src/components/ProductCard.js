import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  );
};

export default ProductCard;
