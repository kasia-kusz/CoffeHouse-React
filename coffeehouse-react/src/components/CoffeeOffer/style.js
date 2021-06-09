import styled, { css } from "styled-components";
import { Paragraph, TitleXL } from "../Typography/Typography";
//import dataImg from "../../data/offerData";

export const LightColorBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const HouseOffer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 0;
  }
`;

export const Offer = styled.div`
  margin: 0;
`;

export const OfferItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.brokenWhite};
  height: 300px;
  /* ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `} */
  &.reverse {
    flex-direction: row-reverse;
    @media screen and (max-width: ${({ theme }) =>
        theme.breakpoints.tablet_small}) {
      flex-direction: column;
      height: 500px;
    }
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
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
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
    width: 100%;
    height: 60%;
  }
`;

export const Title = styled(TitleXL)`
  color: ${({ theme }) => theme.colors.primaryColor};
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
    background-color: ${({ theme }) => theme.colors.primaryColor};
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Description = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const ImageBox = styled.div`
  width: 50%;
  //height: 100%;
  /* background: url(dolar{dataImg[0].src}) no-repeat center center/cover; */
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
    width: 100%;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
