import React from "react";

export default function ProductCard(props) {
  return (
    <div>
      <p>Title</p>
      <p>{props.product.name}</p>
      <img height="350" width="320" src={props.product.image} />
    </div>
  );
}
