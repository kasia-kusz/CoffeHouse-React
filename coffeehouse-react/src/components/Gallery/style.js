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
  //margin: 10px 20px;
`;
