import styled from "styled-components";
import { white, mainColor, grey } from "../../../styles/Colors";

interface StyledButtonProps {
  isActive: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 88px;
  background-color:  ${(props) => (props.isActive ? mainColor : grey[300])};
  border-radius: 16px;
  margin-top: 52px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  width: 220px;
  transition: background-color 0.3s ease;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
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
