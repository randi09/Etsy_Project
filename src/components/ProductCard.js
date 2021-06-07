import React from "react";

export default function ProductCard(props) {
  return (
    <div>
      <p>Title</p>
      <p>{props.product.name}</p>
      <img height="50" width="50" src={props.product.image} />
    </div>
  );
}
