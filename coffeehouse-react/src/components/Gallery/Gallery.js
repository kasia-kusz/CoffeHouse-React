import React from "react";
import { SectionWrapper } from "../../shared/wrappers/wrappers";
import "./style";
import dataImg from "../../data/introductionData";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { TextBox, Title, Description, Image } from "./style";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
      spaceBetween={50}
      slidesPerView={3}
      navigation
      //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
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
