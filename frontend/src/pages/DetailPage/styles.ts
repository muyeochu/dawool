import styled from "styled-components";

import { ReactComponent as VolumeIc } from "../../assets/icon/volumeIc.svg";
import { ReactComponent as FolderIc } from "../../assets/icon/folderIc.svg";
import { ReactComponent as HeartIc } from "../../assets/icon/heartIc.svg";

import { mainColor, black, white, blue, grey } from "../../styles/Colors";

export const MainGridItems = styled.div`
  grid-column: 2 / span 1;
  height: 100vh;
`;

export const RowGridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  width: 100%;
  height: 100%;
`;

export const RowGridItems = styled.div`
  grid-row: 2 / span 1;
`;

export const VolumeIcStyle = styled(VolumeIc)`
  width: 48px;
  height: 41px;
  margin-left: -10px;
`;

export const FolderIcStyle = styled(FolderIc)`
  width: 37px;
  height: 32px;
  cursor: pointer;
`;

export const HeartIcStyle = styled(HeartIc)`
  width: 37px;
  height: 32px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 46px;
    line-height: 62px;
  }
`;

export const TitleIcContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IcExpContainer = styled.div`
  text-align: center;

  p {
    color: ${grey[500]};
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`;

export const MainImgContainer = styled.div`
  width: 243.64px;
  height: 357px;
  background-color: pink;
  border-radius: 12px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
`;

export const MainBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
