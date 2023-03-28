import styled from "styled-components";
import { mainColor, white, black, blue, grey } from "../../styles/Colors";

import { ReactComponent as SearchIc } from "../../assets/icon/searchSquareIc.svg";

export const MainGridItems = styled.div`
  grid-column: 2 / span 1;
  height: 100%;
`;

export const RowGridContainer = styled.div`
  display: grid;
  grid-template-rows: 90px auto 90px;
  width: 100%;
  height: 100%;
`;

export const RowGridItems = styled.div`
  grid-row: 2 / span 1;
`;

export const SerachIcStyle = styled(SearchIc)`
  width: 65px;
  height: 65px;
`;

export const TitleContainer = styled.div`
  display: flex;

  span {
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    margin-top: 2px;

    &.keyword {
      color: ${mainColor};
      margin-right: 10px;
      margin-left: 5px;
    }
  }
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 50px;
`;

export const TripCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  gap: 25px;
  margin-top: -20px;
`;
