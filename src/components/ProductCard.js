import React from "react";
import { setProductData } from "../actions/selectedProductAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{props.product.name}</p>
      <img height="350" width="320" src={props.product.image} alt="tumblers" />
      <p>{props.product.description}</p>

      <Link to={`/iproduct/${props.product.id}`}>
        <button onClick={() => setProductData(dispatch, props.product)}>
          View More Details
        </button>
      </Link>
    </div>
  );
}
