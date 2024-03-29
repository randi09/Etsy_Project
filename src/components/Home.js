import React from "react";
import PurplePyramid from "../images/PurplePyramid.jpeg";
import TattooTumbler from "../images/TattooTumbler.jpeg";
import RainbowDominoes from "../images/RainbowDominoes.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-Container">
      <h1 className="header">Pyramids</h1>

      <Link to="/pyramid">
        <img src={PurplePyramid} height="600" width="510" alt="" />
      </Link>
      <h1 className="header">Dominoes</h1>
      <Link to="/dominoes">
        <img src={RainbowDominoes} height="600" width="510" alt="" />
      </Link>
      <h1 className="header">Tumblers</h1>
      <Link to="/tumbler">
        <img src={TattooTumbler} height="600" width="510" alt="" />
      </Link>
    </div>
  );
}
