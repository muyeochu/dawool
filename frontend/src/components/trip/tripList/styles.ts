import styled from "styled-components";
import { black, mainColor } from "../../../styles/Colors";

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

  span{
    color: ${mainColor};
    margin-right: 12px;
  }
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

export const TripCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  flex-flow: row wrap;
  gap: 43px;
`;

export const EndBlock = styled.div`
  visibility: hidden;
`