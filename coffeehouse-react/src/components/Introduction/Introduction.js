import React from "react";
// import "./introduction-styles.js";
import {
  Intro,
  Content,
  Title,
  Text,
  SmallGallery,
  ImageWrapper,
  Img,
} from "./introduction-styles.js";
import latte from "../../assets/latte.jpg";
import dessert from "../../assets/dessert.jpg";
import breakfast from "../../assets/breakfast.jpg";
import iceCoffee from "../../assets/icecoffee.jpg";

const Introduction = () => (
  <Intro>
    <Content>
      <Title>OUR SWEETS</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quia
        sunt amets suscipit eveniet similique molestias eaque nam ut corrupti.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </Content>
    <SmallGallery>
      <ImageWrapper>
        <Img src={iceCoffee} alt="breakfast" />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={breakfast} alt="latte" />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={dessert} alt="dessert" />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={latte} alt="idecoffee" />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={dessert} alt="latte" />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={latte} alt="icecoffee" />
      </ImageWrapper>
    </SmallGallery>
  </Intro>
);
export default Introduction;
