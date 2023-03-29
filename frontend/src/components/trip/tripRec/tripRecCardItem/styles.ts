import styled from "styled-components";
import { mainColor, grey, blue, white, black } from "../../../../styles/Colors";

export const RecCardContainer = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const RecImageContainer = styled.div`
  width: 270px;
  height: 340px;
  border-radius: 14px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.4));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const RecCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${RecImageContainer}:hover & {
    -webkit-filter: blur(4px);
    filter: blur(4px) brightness(40%);
  }
`;

export const RecCardTitleContainer = styled.div`
  font-family: "SUIT";
  font-style: normal;
  width: 200px;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  color: ${white};
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  ${RecImageContainer}:hover & {
    opacity: 1;
    transition: transform 0.2s ease-in-out;
  }
`;
