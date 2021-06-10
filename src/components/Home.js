import React from "react";
import PurplePyramid from "../images/PurplePyramid.jpeg";
import TattooTumbler from "../images/TattooTumbler.jpeg";
import RainbowDominoes from "../images/RainbowDominoes.jpeg";
import { Link } from "react-router-dom";
//
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Pyramids</p>
      <Link to="/pyramid">
        <img src={PurplePyramid} height="600" width="510" alt="" />
      </Link>
      <p>Dominoes Sets</p>
      <Link to="/dominoes">
        <img src={RainbowDominoes} height="600" width="510" alt="" />
      </Link>
      <p>Tumblers</p>
      <Link to="/tumbler">
        <img src={TattooTumbler} height="600" width="510" alt="" />
      </Link>
    </div>
  );
}
