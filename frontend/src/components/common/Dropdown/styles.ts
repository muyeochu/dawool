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

  &:hover:enabled {
    background-color: ${blue[300]};
    transition: background-color 0.3s ease;
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

export const DropdownItemContainer = styled.div`
  position: absolute;
  top: 90%;
  text-align: center;
  overflow: hidden;
`;

export const DropdownItem = styled.ul`
  list-style: none;
  background-color: ${blue[100]};
  width: auto;
  padding: 8px 0 8px 0;
  border-radius: 4px;

  @keyframes dropdown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.5s ease;

  li {
    padding-top: 5px;
    padding-bottom: 5px;

    &:hover {
      background-color: ${mainColor};
      cursor: pointer;
    }
  }
`;
