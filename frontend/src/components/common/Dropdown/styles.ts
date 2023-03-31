import styled from "styled-components";
import { mainColor, black, blue, grey } from "../../../styles/Colors";
import { ReactComponent as UpdownIc } from "../../../assets/icon/updownIc.svg";

interface DropdownProps {
  isclicked: string;
}

// 드랍다운 버튼
export const DropdownContainer = styled.button<DropdownProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 12px 28px;
  gap: 8px;
  background-color: ${blue[100]};
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover:enabled {
    background-color: ${blue[300]};
    transition: background-color 0.3s ease;
  }
`;

export const DropdownBtnText = styled.span<DropdownProps>`
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

export const DropdownBtnIcStyle = styled(UpdownIc)<DropdownProps>`
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isclicked }) =>
    isclicked === "true" ? "rotate(180deg)" : "none"};
`;

export const DropdownItemContainer = styled.div`
  position: absolute;
  text-align: center;
  z-index: 1;
  overflow: auto;
  background-color: ${blue[100]};
  margin: 10px auto;
  width: 112px;
  border-radius: 6px;
  padding: 10px;
  max-height: 420px;

  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${blue[100]};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${grey[400]};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${mainColor};
  }
`;

export const DropdownItem = styled.ul`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  list-style: none;
  width: auto;
  padding: 8px 0 8px 0;
  cursor: pointer;

  @keyframes dropdown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.5s ease;

  &:hover {
    font-weight: 800;
    cursor: pointer;
  }
`;
