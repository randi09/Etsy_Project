import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPyramidToCart } from "../actions/pyramidAction";
import { PyramidData } from "../PyramidData";
import ProductCard from "../components/ProductCard";

export default function PyramidCard() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pyramids = useSelector((state) => state.addPyramid);

  useEffect(() => {
    addPyramidToCart(dispatch, PyramidData);
  }, []);

  return (
    <div>
      <h1>Pyramids</h1>

      {pyramids.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
