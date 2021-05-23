import styled from "styled-components";
import coffeeBack from "../../assets/showcase.jpg";

export const Container = styled.div`
  //background-color: #ccc;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

// ${zmienna} - aby sie dostac do zmiennych w cssie
// ${(props) => props.pole} - aby sie dostac do propsow
// ${({pole z propsa}) => aby od razu dostac sie do pola z propsow}

export const MainShowcase = styled.div`
  background-color: ${({ theme }) => theme.colors.darkColor};
  height: 100vh;
  position: relative;
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
