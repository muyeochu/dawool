import styled, { css } from "styled-components";
import { mainColor, blue } from "../../../styles/Colors";

export const MainFourthContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainFontStyle = styled.div<{ isAnimation: string }>`
  font-weight: 700;
  font-size: 40px;
  line-height: 62px;
  letter-spacing: 0.02em;
  margin-top: 50px;

  opacity: 0;

  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${({ isAnimation }) =>
    isAnimation === "true" &&
    css`
      opacity: 1;
      transform: translateY(100%);
    `}
`;

export const SideFontStyle = styled.div<{ isAnimation: string }>`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.02em;

  margin-top: 100px;
  margin-bottom: 120px;

  opacity: 0;
  transition: opacity 1s ease-out;

  ${({ isAnimation }) =>
    isAnimation === "true" &&
    css`
      opacity: 1;
      transition-delay: 0.5s;
    `}
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const CardBox = styled.div<{ isAnimation: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;

  &.box1 {
    ${({ isAnimation }) =>
      isAnimation === "true" &&
      css`
        animation: fadeIn4 1s ease-out forwards;
        animation-delay: 0.3s;
      `}
  }

  &.box2 {
    ${({ isAnimation }) =>
      isAnimation === "true" &&
      css`
        animation: fadeIn4 1s ease-out forwards;
        animation-delay: 0.6s;
      `}
  }

  &.box3 {
    ${({ isAnimation }) =>
      isAnimation === "true" &&
      css`
        animation: fadeIn4 1s ease-out forwards;
        animation-delay: 0.9s;
      `}
  }

  @keyframes fadeIn4 {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CardOutFontStyle = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 37px;

  margin-bottom: 20px;
  letter-spacing: 0.02em;
`;

export const CardStyle = styled.div`
  transition: transform 0.2s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 309px;
  height: 128px;
  background: ${blue[100]};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardInFontStyle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
`;

export const ColorFont = styled.span`
  color: ${mainColor};
`;
