import styled from "styled-components";

import { ReactComponent as VolumeIc } from "../../assets/icon/volumeIc.svg";
import { ReactComponent as FolderIc } from "../../assets/icon/folderIc.svg";
import { ReactComponent as HeartIc } from "../../assets/icon/heartIc.svg";

import { mainColor, black, white, blue, grey } from "../../styles/Colors";

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
  margin-top: 60px;
`;

export const MainImgContainer = styled.div`
  width: 270px;
  height: 380px;
  background-color: pink;
  border-radius: 12px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
`;

export const MainBtnInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InfoBox = styled.div`
  width: 840px;
  height: 315px;
  max-height: 315px;
  overflow: auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

  padding: 10px 20px 10px 20px;

  ul {
    padding-left: 0;
    margin-bottom: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }

  /* 스크롤바 전체 스타일 지정 */
  ::-webkit-scrollbar {
    width: 12px; /* 스크롤바 너비 */
  }

  /* 스크롤바 트랙 스타일 지정 */
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* 스크롤바 트랙 배경색 */
    border-radius: 10px; /* 스크롤바 트랙 테두리 반지름 */
  }

  /* 스크롤바 썸네일(바) 스타일 지정 */
  ::-webkit-scrollbar-thumb {
    background-color: #c1c1c1; /* 스크롤바 썸네일 배경색 */
    border-radius: 10px; /* 스크롤바 썸네일 테두리 반지름 */
    border: 2px solid #f5f5f5; /* 스크롤바 썸네일 테두리 */
  }

  /* 스크롤바 썸네일 마우스 오버 시 스타일 지정 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8; /* 스크롤바 썸네일 배경색 */
    border-radius: 10px; /* 스크롤바 썸네일 테두리 반지름 */
  }
`;
