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
import { SectionWrapper } from "../../shared/wrappers/wrappers.js";
import data from "../../data/introductionData";
import uuid from "react-uuid";
const Introduction = () => (
  <SectionWrapper>
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
        {data.map((image) => (
          <ImageWrapper key={uuid()}>
            <Img src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </SmallGallery>
    </Intro>
  </SectionWrapper>
);
export default Introduction;
