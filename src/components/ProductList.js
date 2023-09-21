import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const ProductList = ({ products, category, sortBy }) => {
  let filteredProducts = [...products];

  if (category !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sortBy === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
