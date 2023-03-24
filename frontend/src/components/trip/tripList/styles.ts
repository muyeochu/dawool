import styled from "styled-components";
import { mainColor, white, grey, black, blue } from "../../../styles/Colors";

export const TripListContainer = styled.div``;

export const TripListTitle = styled.h1`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 56px;
  display: flex;
  align-items: center;

  color: ${black};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 27px;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;


