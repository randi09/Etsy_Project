import React from "react";
import { ProductData } from "../ProductData";
import randi from "../images/randi.jpeg";

export default function About() {
  return (
    <div>
      <p>
        Welcome to RLR Designs. I specialize in customized Tumblers, Dominoes
        Sets, Pyramids set in epoxy.
      </p>
      <img src={randi} alt="" />
    </div>
  );
}
