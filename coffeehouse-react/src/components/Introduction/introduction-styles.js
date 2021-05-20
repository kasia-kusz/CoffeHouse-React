import styled, { css } from "styled-components";

export const Intro = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 0;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-right: 80px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_small}) {
    padding-right: 50px;
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom: 8rem;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    bottom: -4rem;
    left: 0;
    height: 2px;
    width: 50px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Text = styled.p`
  color: gray;
  font-size: 1.5rem;
  line-height: 1.8;
  max-width: 500px;
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    text-align: center;
    padding: 0 20px;
  }
`;

export const SmallGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  margin-top: -12px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    margin-top: 80px;
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone_big}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 12px;
  width: calc(33.33333% - 8px);
  &:not(:nth-child(3n)) {
    margin-right: 12px;
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet_big}) {
    &:not(:nth-child(3n)) {
      margin-right: 0;
    }
    &:not(:nth-child(2n)) {
      margin-right: 24px;
    }
    width: calc(50% - 12px);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone_big}) {
    &:not(:nth-child(2n)) {
      margin-right: 0;
    }
    &:not(:first-child) {
      margin-top: 30px;
    }
    margin-right: 0;
    width: 100%;
  }
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`;
