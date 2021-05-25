import styled from "styled-components";
import { Paragraph, TitleL } from "../Typography/Typography";

export const LightColorBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const HouseOffer = styled.div`
  @media screen and (max-width: #{$phone}) {
    padding: 0;
  }
`;

export const Offer = styled.div`
  margin: 0;
`;

export const OfferItem = styled.div`
  display: flex;
  background-color: $light-white;
  height: 300px;

  &.reverse {
    flex-direction: row-reverse;
    @media screen and (max-width: #{$tablet_small}) {
      //flex-direction: row;
      flex-direction: column;
    }
  }
  @media screen and (max-width: #{$tablet_small}) {
    flex-direction: column;
    height: 500px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px;
  @media screen and (max-width: #{$tablet_small}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: $primary-color;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: 0;
    height: 2px;
    width: 50px;
    background-color: $primary-color;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Description = styled.p`
  color: $secondary-color;
  font-size: 1.7rem;
`;

export const ImageBox = styled.div`
  width: 50%;
  height: 100%;
  background: url("../assets/icecoffee.jpg") no-repeat center center/cover;
  @media screen and (max-width: #{$tablet_small}) {
    width: 100%;
  }
`;
