import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 1080px;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_small}) {
    max-width: 972px;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    max-width: 729px;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
    max-width: 495px;
  }
`;
