import styled, { css } from "styled-components";
import coffeeBack from "../../assets/showcase.jpg";

export const Container = styled.div`
  //background-color: #ccc;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

export const MainShowcase = styled.div`
  background-color: ${({ theme }) => theme.colors.darkColor};
  //background-color: #333;
  height: 100vh;
  &:after {
    content: "";
    background: url(${coffeeBack}) no-repeat center center/cover;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  z-index: 2;
`;
