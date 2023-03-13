import styled from "styled-components";
import { white, black, mainColor, grey, blue } from "../../../styles/Colors";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 34px;
  gap: 5px;
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid ${mainColor};
  border-radius: 20px;
  cursor: pointer;

  &:hover:enabled {
    background-color: ${mainColor};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// 텍스트 스타일링하는 컴포넌트
export const ButtonText = styled.span`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;

  color: black;
`;

// 이미지 스타일링하는 컴포넌트
export const ButtonImage = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 8px;
`;
