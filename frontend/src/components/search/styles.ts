import styled from "styled-components";
import { mainColor, grey, blue, black } from "../../styles/Colors";

import { ReactComponent as SearchIc } from "../../assets/icon/searchSquareIc.svg";
import { ReactComponent as NonSearchImg } from "../../assets/images/nonSearchImg.svg";
import { ReactComponent as ToUpIc } from "../../assets/icon/toUpIc.svg";

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
  margin-left: -8px;

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

  align-items: center;
  flex-flow: row wrap;
  gap: 43px;
  margin-top: -20px;
`;

export const NonDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 20px;

  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 54px;
    color: ${grey[500]};
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const NonSearchImgStyle = styled(NonSearchImg)`
  width: 200px;
  height: 200px;
`;

export const MicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const SpeakFontStyle = styled.div`
  height: 100px;
  width: 300px;
  text-align: center;

  p {
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    color: ${black};
  }
`;

export const GuideFontStyle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 50px;
  color: ${grey[500]};
`;

export const BtnStyle = styled.div`
  transition: transform 0.2s ease-in-out;

  width: 150px;
  height: 46px;
  background-color: ${mainColor};
  color: white;
  border: none;
  border-radius: 18px;
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 2px;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    color: white;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: ${blue[500]};
  }
`;

export const SideFontStyle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-decoration: underline;
  color: ${grey[500]};

  &:hover {
    cursor: pointer;
  }
`;

export const ToUpIcStyle = styled(ToUpIc)`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 30px;
  right: 50px;
  fill: ${mainColor};

  &:hover {
    cursor: pointer;
    fill: ${blue[500]};
  }
`;
