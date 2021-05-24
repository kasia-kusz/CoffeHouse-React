import styled from "styled-components";

const family = "Brush Script MT, cursive";

export const TitleXL = styled.h1`
  font-size: 40px;
  font-family: ${family};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 38px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
`;

export const TitleL = styled.h2`
  font-size: 34px;
  font-family: ${family};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 32px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: 12px;
  }
`;
