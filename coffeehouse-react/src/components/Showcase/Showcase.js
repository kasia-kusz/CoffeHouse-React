import React from "react";
import "./styles.js";
import { Container, MainShowcase, Logo, Image } from "./styles.js";
import logoImg from "../../assets/coffee-logo-svg.svg";

const Showcase = () => {
  return (
    <Container>
      <MainShowcase className="showcase">
        <Logo className="logo">
          <Image className="logoImg" src={logoImg} alt="Coffee logo"></Image>
        </Logo>
      </MainShowcase>
    </Container>
  );
};

export default Showcase;
