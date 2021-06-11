import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { setProductData } from "../actions/tumblerDataAction";
import { ProductData } from "../ProductData";

export default function DominoesCard() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const tumblers = useSelector((state) => state.tumblerReducer);

  useEffect(() => {
    setProductData(dispatch, ProductData);
  }, []);

  return (
    <div>
      <h1>Tumblers</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setProductData(dispatch, search)}>Search</button>
      {tumblers.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
