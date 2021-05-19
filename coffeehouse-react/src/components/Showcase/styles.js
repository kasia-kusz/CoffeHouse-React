import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: darkgreen;
  width: 100%;
  height: 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
