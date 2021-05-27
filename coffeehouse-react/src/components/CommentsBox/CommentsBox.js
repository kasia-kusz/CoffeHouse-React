import React from "react";
import { SectionWrapper } from "../../shared/wrappers/wrappers";
import data from "../../data/commentsBoxData";
import {
  CustomerImg,
  ImageWrapper,
  Comment,
  Opinion,
  CustomerName,
  Title,
  DarkColorBox,
} from "./styles.js";
import uuid from "react-uuid";

const CommentsBox = () => (
  <DarkColorBox>
    <SectionWrapper>
      <Comment>
        <Title>"Tasty food, set inside a lovely coffe house."</Title>
        <Opinion>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          delectus eligendi in quas, nihil ipsum quia ea repellat
          consequuntur. Lorem adipisicing elit. Rerum delectus eligendi in quas,
          nihil ipsum quia ea repellat consequuntur.
        </Opinion>
        {data.map((image) => (
          <ImageWrapper key={uuid()}>
            <CustomerImg src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
        <CustomerName>SANDRA FILES</CustomerName>
      </Comment>
    </SectionWrapper>
  </DarkColorBox>
);

export default CommentsBox;
