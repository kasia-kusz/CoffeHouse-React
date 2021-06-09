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
`;
export const Nav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Next = styled.div`
  font-size: 24px;
  border-radius: 20%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  margin-right: 5px;
`;

export const Prev = styled.div`
  width: 30px;
  //height: 30px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 20%;
  cursor: pointer;
  margin-left: 5px;
`;
