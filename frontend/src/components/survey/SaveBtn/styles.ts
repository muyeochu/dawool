import styled from "styled-components";
import { white, black, mainColor, grey, blue } from "../../../styles/Colors";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 88px;
  background-color: ${grey[300]};
  border-radius: 16px;
  margin-top: 52px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 220px;
`;

export const ButtonText = styled.span`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${white};
`;
