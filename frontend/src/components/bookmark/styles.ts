import styled from "styled-components";
import { black, grey } from "../../styles/Colors";

import { ReactComponent as NonBookmarkImg } from "../../assets/images/nonBookmarkImg.svg";

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

export const NoBoxContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 54px;
    color: ${grey[500]};
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const NonBookmarkImgStyle = styled(NonBookmarkImg)`
  width: 350px;
  height: 350px;
`;
