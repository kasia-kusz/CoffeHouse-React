import styled, { css } from "styled-components";

const byleco = css`
  background-color: grey;
`;

export const ListItem = styled.li`
  ${byleco};
`;

export const Container = styled.div`
  background-color: tomato;
  width: 100%;
  height: 100px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
