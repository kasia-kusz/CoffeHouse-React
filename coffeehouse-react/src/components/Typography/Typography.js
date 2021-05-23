import styled from "styled-components";

export const TitleXL = styled.h1`
  font-size: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const TitleL = styled.h2`
  font-size: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 18px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
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
