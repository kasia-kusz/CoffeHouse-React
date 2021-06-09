import React from "react";
import "./styles.js";
import mapImage from "../../assets/map.PNG";
import {
  Container,
  FooterDiv,
  Contact,
  FooterHeader,
  FooterText,
  TextWrap,
  IconDescription,
  Map,
  MapImg,
} from "./styles.js";
import { SectionWrapper } from "../../shared/wrappers/wrappers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFax } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container className="footer">
      <SectionWrapper>
        <FooterDiv>
          <Contact>
            <FooterHeader>Visit Us</FooterHeader>
            <FooterText>
              <TextWrap>
                <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                <IconDescription>
                  1234 4rd St. San Francisco, CA 88553
                </IconDescription>
              </TextWrap>
              <TextWrap>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <IconDescription>reservation@gmail.com</IconDescription>
              </TextWrap>
              <TextWrap>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <IconDescription>(456)789132456</IconDescription>
              </TextWrap>
              <TextWrap>
                <FontAwesomeIcon icon={faFax}></FontAwesomeIcon>
                <IconDescription>(412)789123458</IconDescription>
              </TextWrap>
            </FooterText>
          </Contact>
          <Map>
            <MapImg src={mapImage} alt="map" />
          </Map>
        </FooterDiv>
      </SectionWrapper>
    </Container>
  );
};

export default Footer;
