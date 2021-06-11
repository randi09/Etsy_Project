import React from "react";

import { useDispatch } from "react-redux";

import { removeFromCart } from "../actions/removeFromCart";

export default function CartCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{props.product.name}</p>
      <img height="350" width="320" src={props.product.image} alt="tumblers" />
      <p>{props.product.description}</p>

      <button onClick={() => removeFromCart(dispatch, props.product.id)}>
        Remove
      </button>
    </div>
  );
}
