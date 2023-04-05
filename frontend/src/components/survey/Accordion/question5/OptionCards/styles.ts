import styled from "styled-components";
import { white, blue } from "../../../../../styles/Colors";

import { LazyLoadImage } from "react-lazy-load-image-component";

export const CardListContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 26px;
`;

export const CardContainer = styled.div<{ isSelected: boolean }>`
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
  transition: outline 0.1s ease-in-out;

  outline: ${({ isSelected }) =>
    isSelected ? `8px solid ${blue[300]}` : "none"};
`;

export const CardImage = styled(LazyLoadImage)`
  width: 200px;
  height: 292px;
  filter: brightness(70%);
  object-fit: cover;
`;

export const CardText = styled.div`
  width: 170px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${white};
  transform: translate(-50%, -50%);
`;
