import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { Button } from "react-bootstrap";

export default function SelectedProduct(props) {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.setProduct);
  console.log(selectedProduct);
  return (
    <div>
      <h1>Selected Product</h1>
      <p>{selectedProduct.name}</p>
      <img src={selectedProduct.image} height="350" width="350" alt="" />
      <p>{selectedProduct.description}</p>
      <Button onClick={() => addToCart(dispatch, selectedProduct)}>
        Add to Cart
      </Button>
    </div>
  );
}
