import styled from "styled-components";
import { mainColor, grey, blue, white, black } from "../../../../styles/Colors";

export const RecCardContainer = styled.div`
  width: 240px;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const RecImageContainer = styled.div`
  width: 272px;
  height: 400px;
  border-radius: 14px;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.4));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RecCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

