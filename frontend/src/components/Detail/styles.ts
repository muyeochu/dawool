import styled, { css } from "styled-components";

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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div<{ title: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${(props) => (props.title.length >= 10 ? "32px" : "46px")};
    font-weight: 700;
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
  width: 100%;
  gap: 22px;
`;

export const MainImgContainer = styled.div`
  width: 32%;
  height: 380px;

  border-radius: 12px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
`;

export const MaingImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
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
  width: 850px;
  height: auto;
  max-height: 315px;
  overflow: auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

  padding: 20px 30px 20px 30px;

  &.barrier {
    min-height: 50px;
    width: 100%;
    padding: 30px;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 10px;
    border: 2px solid #f5f5f5;
  }

  /* 스크롤바 썸네일 마우스 오버 시 스타일 지정 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
    border-radius: 10px;
  }
`;

export const InfoFontStyle = styled.span`
  color: ${grey[600]};
  margin-left: 20px;
`;

export const BarrierContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  p {
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;

    &.exp {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 20px;
      color: ${grey[400]};
    }
  }
`;

export const BarrierBtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MapContainer = styled.div`
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 500px;
`;
