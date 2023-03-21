import styled from "styled-components";
import {
  white,
  black,
  mainColor,
  grey,
  blue,
} from "../../../../../styles/Colors";

interface StyledButtonProps {
  isClicked: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 34px;
  background-color: ${({ isClicked }) => (isClicked ? mainColor : "grey[50]")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover:enabled {
    background-color: ${blue[300]};
    color: ${({ isClicked }) => (isClicked ? grey[500] : white)};
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
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ isClicked }) => (isClicked ? white : grey[500])};
`;

// 버튼 안의 이미지 스타일 지정
// export const ButtonIcon = styled.img<StyledButtonProps>`
//   width: 20px;
//   height: 20px;
//   filter: ${({ isClicked }) => (isClicked ? "brightness(100%)" : "brightness(0%)")};
// `;
