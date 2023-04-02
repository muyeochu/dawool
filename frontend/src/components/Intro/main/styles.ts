import styled, { keyframes } from "styled-components";

import { ReactComponent as DownArrowIc } from "../../../assets/icon/downarrowIc.svg";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const MainFirstContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;

  position: relative;
`;

export const MainVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const ElementContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FontContainer = styled.div`
  text-align: center;
  position: relative;
`;

export const MainFontStyle = styled.div`
  font-weight: 700;
  font-size: 100px;
  line-height: 125px;
  letter-spacing: 0.02em;

  color: white;
`;

export const SideFontStyle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-top: 20px;

  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const DonwArrowIcContainer = styled.div`
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const DonwArrowIcStyle = styled(DownArrowIc)`
  transition: transform 0.2s ease-in-out;

  animation: ${bounce} 1s linear infinite;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    animation: none;
  }
`;
