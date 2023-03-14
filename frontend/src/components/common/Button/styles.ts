import styled from "styled-components";
import { white, black, mainColor, grey, blue } from "../../../styles/Colors";

interface StyledButtonProps {
  isClicked: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  gap: 5px;
  background-color: ${({ isClicked }) => (isClicked ? mainColor : white)};
  color: "black";
  font-size: 18px;
  font-weight: 700;
  border: 3px solid ${mainColor};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover:enabled {
    background-color: ${blue[300]};
    border: 3px solid ${blue[300]};
    color: ${({ isClicked }) => (isClicked ? black : white)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// 버튼 안의 텍스트 스타일 지정
export const ButtonText = styled.span<StyledButtonProps>`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ isClicked }) => (isClicked ? white : black)};
`;

// 버튼 안의 이미지 스타일 지정
export const ButtonIcon = styled.img<StyledButtonProps>`
  width: 20px;
  height: 20px;
  filter: ${({ isClicked }) => (isClicked ? "brightness(100%)" : "brightness(0%)")};
`;
