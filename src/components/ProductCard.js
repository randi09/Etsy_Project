import React from "react";
import { setProductData } from "../actions/selectedProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ProductCard(props) {
  const dispatch = useDispatch();
  console.log(props.product);
  const selectedProduct = useSelector((state) => state.setProduct);
  console.log(selectedProduct);
  return (
    <div>
      <p>{props.product.name}</p>
      <img height="475" width="370" src={props.product.image} alt="tumblers" />
      <p>{props.product.description}</p>

      <Link to={`/iproduct/${props.product.id}`}>
        <Button onClick={() => setProductData(dispatch, props.product)}>
          View More Details
        </Button>
      </Link>
    </div>
  );
}
