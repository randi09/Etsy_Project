import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { setProductData } from "../actions/tumblerDataAction";
import { ProductData } from "../ProductData";

export default function TumblerCard() {
  const dispatch = useDispatch();
  const tumblers = useSelector((state) => state.tumblerReducer);

  useEffect(() => {
    setProductData(dispatch, ProductData);
  }, []);

  return (
    <div>
      <h1>Tumblers</h1>

      {tumblers.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
