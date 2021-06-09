import styled from "styled-components";
import { Paragraph, TitleL } from "../Typography/Typography";

export const Title = styled(TitleL)`
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 2rem;
`;

export const Description = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding-bottom: 40px;
  line-height: 2rem;
`;

export const TextBox = styled.div`
  text-align: center;
  padding: 0 60px 30px 60px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
    width: 90%;
  }
`;
export const Nav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
`;

export const Next = styled.div`
  font-size: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  margin-right: 5px;
  padding: 0 4px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
    margin: 0 0 0 15px;
  }
`;

export const Prev = styled.div`
  padding: 0 4px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 50%;
  cursor: pointer;
  margin-left: 5px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_small}) {
    margin: 0 10px 0 0;
  }
`;
