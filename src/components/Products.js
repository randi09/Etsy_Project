import React from "react";
import { useDispatch } from "react-redux";
import { setProductData } from "../actions/TumblerDataAction";
import { ProductData } from "../ProductData";

export default function Products() {
  const dispatch = useDispatch();
  console.log(ProductData);
  setProductData(dispatch);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
