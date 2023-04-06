import styled from "styled-components";
import {
  mainColor,
  white,
  black,
  blue,
  grey,
  red,
} from "../../../styles/Colors";

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
    min-width: 72px;
    max-width: 269px;
    max-height: 40px;
    padding: 10px 22px;
    gap: 5px;
    border: 3px solid ${blue[300]};
    border-radius: 20px;
    background-color: white;
    transition: background-color 0.2s ease-in-out;
  }

  &.DetailBtn_category {
    margin-top: 2px;
    min-width: 72px;
    max-width: 269px;
    max-height: 40px;
    padding: 10px 22px;
    gap: 5px;
    border: 3px solid ${grey[300]};
    border-radius: 18px;
    background-color: white;
    cursor: default;
  }

  &.DetailBtn_add {
    margin-top: 2px;
    margin-left: 2%;
    min-width: 60px;
    max-height: 35px;
    padding: 3px;
    gap: 5px;
    border: 3px solid ${mainColor};
    border-radius: 18px;
    background-color: white;
    display: inherit;
    /* float: right; */
  }

  &.DetailBtn_delete {
    margin-top: 2px;
    margin-right: 5%;
    right: 20%;
    min-width: 60px;
    max-height: 35px;
    padding: 4px 3px 3px 3px;
    gap: 5px;
    border: 3px solid ${red[100]};
    border-radius: 18px;
    background-color: white;
    /* display: inline-block; */
    float: right;
  }
`;

export const ButtonText = styled.span<ButtonStyleProps>`
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${grey[500]};

  &.DetailBtn_default {
    color: ${({ disable }) => (disable === "1" ? "white" : "black")};
  }

  &.DetailBtn_delete {
    color: ${red[100]};
  }
  &.DetailBtn_add {
    color: ${grey[300]};
  }
`;

export const ButtonIc = styled.img<ButtonStyleProps>`
  width: 20px;
  height: 20px;

  filter: ${({ disable }) =>
    disable === "1" ? "brightness(100%)" : "brightness(0%)"};
`;
