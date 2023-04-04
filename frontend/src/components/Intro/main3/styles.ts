import styled, { css } from "styled-components";

import { ReactComponent as Main3Img } from "../../../assets/images/main3Img.svg";
import { blue } from "../../../styles/Colors";

export const MainThirdContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${blue[100]};
`;

export const FontContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const MainFontStyle = styled.div<{ isanimation: string }>`
  font-weight: 700;
  font-size: 40px;
  line-height: 62px;
  letter-spacing: 0.02em;
  opacity: 0;

  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      opacity: 1;
      transform: translateY(70%);
    `}
`;

export const MainImgContainer = styled.div<{ isanimation: string }>`
  opacity: 0;
  transition: opacity 1s ease-out;
  ${({ isanimation }) =>
    isanimation === "true" &&
    css`
      opacity: 1;
      transition-delay: 0.1s;
    `}
`;

export const Main3ImgStyle = styled(Main3Img)`
  margin-top: 90px;
`;
