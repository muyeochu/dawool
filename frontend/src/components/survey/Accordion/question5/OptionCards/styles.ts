import styled from "styled-components";
import {
  white,
  black,
  mainColor,
  grey,
  blue,
} from "../../../../../styles/Colors";

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 26px;
`;

export const CardContainer = styled.div<{isSelected: boolean}>`
  width: 200px;
  height: 292px;
  filter: drop-shadow(0px 5.53633px 5.53633px rgba(0, 0, 0, 0.4));
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: ${({ isSelected }) => isSelected ? `10px solid ${blue[200]}` : "none"};
`;

export const CardImage = styled.img`
  width: 120%;
  height: 120%;
  filter: brightness(70%); 
  object-fit: cover;
`;

export const CardText = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${white};
  transform: translate(-50%, -50%);
`;
