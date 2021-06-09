import React from "react";

import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { SectionWrapper } from "../../shared/wrappers/wrappers";
import { TextBox, Title, Description, Image, Next, Prev, Nav } from "./style";
import dataImg from "../../data/introductionData";

SwiperCore.use([Navigation, A11y]);

const options = {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },

  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },

  breakpoints: {
    319: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    867: {
      slidesPerView: 3,
    },
    1023: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 3,
    },
  },
};

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
    <Nav>
      <Prev className="slider-prev">{"<"}</Prev>
      <Swiper {...options}>
        {dataImg.map((img) => (
          <SwiperSlide>
            <Image src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Next className="slider-next">{">"}</Next>
    </Nav>
  </SectionWrapper>
);
export default Gallery;
