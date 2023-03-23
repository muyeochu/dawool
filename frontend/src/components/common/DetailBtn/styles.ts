import styled from "styled-components";
import { mainColor, white, blue } from "../../../styles/Colors";

interface ButtonStyleProps {
  disable?: string | undefined;
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  &.DetailBtn_default {
    padding: 12px 28px;
    gap: 5px;
    border: 3px solid ${mainColor};
    border-radius: 20px;
    cursor: default;
    background-color: ${({ disable }) => (disable === "1" ? mainColor : white)};
  }

  &.DetailBtn_info {
    padding: 10px 22px;
    gap: 5px;
    border: 3px solid ${blue[300]};
    border-radius: 20px;
    background-color: white;
  }
`;

export const ButtonText = styled.span<ButtonStyleProps>`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ disable }) => (disable === "1" ? "white" : "black")};
`;

export const ButtonIc = styled.img<ButtonStyleProps>`
  width: 20px;
  height: 20px;

  filter: ${({ disable }) =>
    disable === "1" ? "brightness(100%)" : "brightness(0%)"};
`;
