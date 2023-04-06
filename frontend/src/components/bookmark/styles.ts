import styled from "styled-components";
import { grey, mainColor } from "../../styles/Colors";

import { ReactComponent as NonBookmarkImg } from "../../assets/images/nonBookmarkImg.svg";
import { ReactComponent as BookMarkPgIc } from "../../assets/icon/bookmarkpgIc.svg";

export const TripCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-flow: row wrap;
  gap: 43px;
  margin-top: -20px;
`;

export const TripListTitle = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    padding-bottom: 8px;
    margin-left: 5px;
  }
`;

export const ExpTitleStyle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 54px;
  color: ${grey[400]};
  margin-bottom: 20px;
  margin-top: -12px;
`;

export const BookMarkPgIcStyle = styled(BookMarkPgIc)`
  width: 65px;
  height: 65px;
  margin-left: -8px;
  fill: ${mainColor};
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
