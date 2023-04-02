import styled from "styled-components";
import { black } from "../../styles/Colors";

export const TripCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  flex-flow: row wrap;
  gap: 43px;
  margin-top: -20px;
`;

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
