import styled, { css } from "styled-components";

import { ReactComponent as main5Img } from "../../../assets/images/main5Img.svg";
import { mainColor, blue, grey } from "../../../styles/Colors";

export const MainFifthContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${blue[100]};
`;

export const Main5ImgStyle = styled(main5Img)<{ isanimation: string }>`
  margin-bottom: 50px;
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      opacity: 1;
      transform: translateY(10%);
    `}
`;

export const MainFontStyle = styled.div<{ isanimation: string }>`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.4;
  text-align: center;

  opacity: 0;
  transition: opacity 1s ease-out;
  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      opacity: 1;
      transition-delay: 0.3s;
    `}
`;

export const ColorFontStyle = styled.div`
  color: ${blue[600]};
`;

export const BtnStyle = styled.button<{ isanimation: string }>`
  width: 330px;
  height: 60px;
  background-color: ${mainColor};
  color: white;
  border: none;
  border-radius: 18px;
  margin-top: 50px;
  margin-bottom: 10px;
  opacity: 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: ${blue[500]};
  }

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      animation: fadeIn 1s ease-out forwards;
      animation-delay: 0.1s;
    `}

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const BtnFontStyle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
`;

export const SideFontStyle = styled.div<{ isanimation: string }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  text-decoration: underline;
  color: ${grey[600]};
  opacity: 0;

  &:hover {
    cursor: pointer;
    color: black;
  }
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      opacity: 1;
      transition-delay: 0.8s;
    `}
`;
