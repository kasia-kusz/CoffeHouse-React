import styled from "styled-components";
import { Paragraph, TitleL } from "../Typography/Typography";

export const DarkColorBox = styled.div`
  background-color: ${({ theme }) => theme.colors.darkColor};
`;

export const Comment = styled.div`
  //height: 400px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone_big}) {
    padding: 0 20px;
  }
`;

export const Title = styled(TitleL)`
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Opinion = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 2.2rem;
  margin-top: 2rem;
`;

export const CustomerImg = styled.img`
  border-radius: 50%;
  height: 90px;
  width: 90px;
  object-fit: cover;
  margin-top: 2rem;
`;

export const CustomerName = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const ImageWrapper = styled.div``;
