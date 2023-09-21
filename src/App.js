import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("jewellery");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Product List App</h1>
      <Filter
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductList products={products} category={category} sortBy={sortBy} />
    </div>
  );
};

export default App;
