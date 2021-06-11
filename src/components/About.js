import React from "react";

import randi from "../images/randi.jpeg";

export default function About() {
  return (
    <div>
      <h1 className="about-content">
        Welcome to RLR Designs. I specialize in customized Tumblers, Dominoes
        Sets, Pyramids set in epoxy.
      </h1>
      <h3 className="about-content">
        The Perfect shop to find Gifts for All Celebrations and Anniversaries.
      </h3>
      <h4 className="about-content">
        The perfect shop where you can find gifts for any occasion. Each gift is
        handcrafted, custom, and personalized for each client. Majority of my
        crafts will have similar themes but not designs. I want everyone to feel
        the comfort of their own unique style. These gifts are great for home
        decors, party decorations, or party favors. I dedicate my love, care and
        patience to each gift, I will always Strive for greatness and perfection
        and make your gift extraordinary. To Everyone who Scans, Buys, or Tell a
        Friend: I Thank You for all of your love and support and couldn't have
        done this without you.
      </h4>

      <img src={randi} alt="" />
      <footer></footer>
    </div>
  );
}
