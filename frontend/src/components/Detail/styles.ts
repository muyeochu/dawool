import styled from "styled-components";

import { ReactComponent as VolumeIc } from "../../assets/icon/volumeIc.svg";
import { ReactComponent as FolderIc } from "../../assets/icon/folderIc.svg";
import { ReactComponent as HeartIc } from "../../assets/icon/heartIc.svg";
import { ReactComponent as likedIc } from "../../assets/icon/likedIc.svg";
import { ReactComponent as MuteIc } from "../../assets/icon/muteIc.svg";

import { grey, blue, mainColor } from "../../styles/Colors";

export const VolumeIcStyle = styled(VolumeIc)`
  fill: ${mainColor};
  min-width: 18px;
  max-width: 18px;
  min-height: 18px;
  max-height: 18px;
  margin-left: 5px;

  &:hover {
    fill: ${blue[500]};
    cursor: pointer;
  }
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

export const LikedIcStyle = styled(likedIc)`
  /* 크기 바뀌는 문제 해결하기! */
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
    font-size: ${(props) =>
      props.title.length >= 33
        ? "26px"
        : props.title.length >= 15
        ? "32px"
        : "42px"};
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

export const InfoBoxContainer = styled.div`
  position: relative;
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
    white-space: nowrap;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${grey[100]};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${grey[200]};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${grey[300]};
  }
`;

export const StopSoundIcStyle = styled(MuteIc)`
  position: absolute;
  width: 35px;
  height: 35px;
  bottom: 20px;
  right: 25px;
  fill: ${mainColor};

  &:hover {
    fill: ${blue[500]};
    cursor: pointer;
  }
`;

export const InfoMainFontStyle = styled.b`
  display: inline-flex;
  align-items: center;
  padding-right: 20px;
  letter-spacing: 0.2px;
  width: 170px;
`;

export const InfoFontStyle = styled.span`
  display: inline-block;
  vertical-align: top;
  color: ${grey[600]};
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
