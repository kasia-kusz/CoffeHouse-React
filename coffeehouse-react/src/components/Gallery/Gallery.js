import React from "react";

import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { SectionWrapper } from "../../shared/wrappers/wrappers";
import { TextBox, Title, Description, Image } from "./style";
import dataImg from "../../data/introductionData";

SwiperCore.use([Navigation, A11y]);

const Gallery = () => (
  <SectionWrapper>
    <TextBox>
      <Title>Our Sweet Collection</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        quidem suscipit aliquid minus repellendus odit explicabo optio excepturi
        quis fugiat.
      </Description>
    </TextBox>
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {dataImg.map((img) => (
        <SwiperSlide>
          <Image src={img.src} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  </SectionWrapper>
);
export default Gallery;
