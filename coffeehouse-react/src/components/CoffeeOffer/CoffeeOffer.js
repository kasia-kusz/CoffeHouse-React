import React from "react";
import { SectionWrapper } from "../../shared/wrappers/wrappers";
import dataImg from "../../data/offerData";
import {
  Description,
  HouseOffer,
  ImageBox,
  LightColorBox,
  Offer,
  OfferItem,
  TextBox,
  Title,
  Image,
} from "./style";

const CoffeeOffer = () => (
  <LightColorBox>
    <SectionWrapper>
      <HouseOffer>
        <Offer>
          {/* <OfferItem>
            <TextBox>
              <Title>{dataImg.first.title}</Title>
              <Description>{dataImg.first.text}</Description>
            </TextBox>
            <ImageBox>
              <Image src={dataImg.first.src} alt={dataImg.first.alt} />
            </ImageBox>
          </OfferItem> */}
          <OfferItem reverse>
            <TextBox>
              <Title>Lunch</Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                aut veritatis inventore nisi quod quaerat consectetur sint!
              </Description>
            </TextBox>
            <ImageBox></ImageBox>
          </OfferItem>
          <OfferItem>
            <TextBox>
              <Title>Dinner</Title>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore totam deleniti eaque!
              </Description>
            </TextBox>
            <ImageBox></ImageBox>
          </OfferItem>

          {dataImg.map((img, index) => (
            <>
              <OfferItem className={index % 2 !== 0 ? "reverse" : ""}>
                <TextBox>
                  <Title>{img.title}</Title>
                  <Description>{img.text}</Description>
                </TextBox>
                <ImageBox>
                  <Image src={img.src} alt={img.alt} />
                </ImageBox>
              </OfferItem>
            </>
          ))}
        </Offer>
      </HouseOffer>
    </SectionWrapper>
  </LightColorBox>
);

export default CoffeeOffer;
