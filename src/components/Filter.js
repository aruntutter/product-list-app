import React from "react";
import "../styles/Filter.css";

const Filter = ({ category, setCategory, sortBy, setSortBy }) => {
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="filter">
      <label>Category:</label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
      </select>
      <label>Sort By:</label>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">None</option>
        <option value="category">Category</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Filter;
