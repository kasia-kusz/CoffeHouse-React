import React from "react";
import "./styles.js";
import { Container } from "./styles.js";

const Showcase = () => {
  return (
    <Container className="showcase">
      <div className="showcase main-showcase">
        <div className="logo">
          <img
            className="logo-img"
            src="../../assets/coffee-logo-svg.svg"
            alt="Coffee logo"
          />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
