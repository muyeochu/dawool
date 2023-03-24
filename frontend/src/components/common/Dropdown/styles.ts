import styled from "styled-components";
import { mainColor, white, black, blue, grey } from "../../../styles/Colors";
import { ReactComponent as UpdownIc } from "../../../assets/icon/updownIc.svg";

interface DropdownProps {
  isClicked: boolean;
}

export const DropdownContainer = styled.button<DropdownProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  gap: 5px;
  background-color: ${blue[100]};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  /* transition: background-color 0.3s ease, color 0.3s ease; */

  &:hover:enabled {
    background-color: ${blue[300]};
  }
`;

// 드랍다운 안의 텍스트 스타일 지정
export const DropdownText = styled.span<DropdownProps>`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${black};
`;

// 드랍다운 안의 이미지 스타일 지정
export const DropdownIcStyle = styled(UpdownIc)<DropdownProps>`
  width: 20px;
  height: 20px;
  transform: ${({ isClicked }) => (isClicked ? "rotate(180deg)" : "none")};
`;
