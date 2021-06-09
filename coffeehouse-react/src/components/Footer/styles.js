import styled from "styled-components";
import { Paragraph, TitleXL } from "../Typography/Typography";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: 100%;
`;

export const FooterDiv = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
export const Contact = styled.div`
  width: 50%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
`;
export const FooterHeader = styled(TitleXL)`
  font-size: 3.7rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 6rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: 0;
    height: 2px;
    width: 50px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-bottom: 4rem;
  }
`;
export const FooterText = styled.div`
  line-height: 3rem;
`;
export const TextWrap = styled.div`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
export const IconDescription = styled(Paragraph)`
  display: inline;
  padding-left: 15px;
`;

export const Map = styled.div`
  width: 50%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const MapImg = styled.img`
  max-height: 400px;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`;
