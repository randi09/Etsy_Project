import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPyramidToCart } from "../actions/pyramidAction";
import { ProductData } from "../ProductData";

export default function PyramidCard() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pyramids = useSelector((state) => state.pyramids);

  useEffect(() => {
    addPyramidToCart(dispatch, ProductData);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => addPyramidToCart(dispatch, search)}>Search</button>
      {pyramids.map((product) => (
        <PyramidCard product={product} />
      ))}
    </div>
  );
}
