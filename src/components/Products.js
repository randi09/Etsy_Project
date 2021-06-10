import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "../actions/addProductAction";
import { ProductData } from "../ProductData";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log("This is products ", products);
  useEffect(() => {
    setProductData(dispatch, ProductData);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setProductData(dispatch, search)}>Search</button>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
      d
    </div>
  );
}
