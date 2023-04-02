import { useEffect } from "react";
import { getSpeech } from "../utils/getSpeech";

import {
  InfoBox,
  InfoMainFontStyle,
  InfoFontStyle,
  VolumeIcStyle,
  StopSoundIcStyle,
  InfoBoxContainer,
} from "./styles";

const TourSpotDetailInfo = ({ myData }: any) => {
  const addValue = myData.info.addr1 === "0" ? "없음" : myData.info.addr1;
  const homepageValue =
    myData.info.homepage === "0" ? "없음" : myData.info.homepage;
  const isBabyCarriageValue = myData.info.isBabyCarriage ? "가능" : "불가능";
  const isPetValue = myData.info.isPet ? "가능" : "불가능";
  const expGuideValue =
    myData.info.expGuide === "0" ? "없음" : myData.info.expGuide;
  const expAgeRangeValue =
    myData.info.expAgeRange === "0" ? "없음" : myData.info.expAgeRange;
  const heritage1Value = myData.info.heritage1 ? "있음" : "없음";
  const heritage2Value = myData.info.heritage2 ? "있음" : "없음";
  const heritage3Value = myData.info.heritage3 ? "있음" : "없음";
  const infoCenterValue =
    myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter;
  const commonParkingValue =
    myData.info.commonParking === "0" ? "없음" : myData.info.commonParking;
  const useSeasonValue =
    myData.info.useSeason === "0" ? "문의 필요" : myData.info.useSeason;
  const useTimeValue =
    myData.info.useTime === "0" ? "문의 필요" : myData.info.useTime;
  const restDateValue =
    myData.info.restDate === "0" ? "없음" : myData.info.restDate;

  const detailValue = {
    주소: addValue,
    홈페이지: homepageValue,
    "유모차 대여": isBabyCarriageValue,
    "애완동물 동반": isPetValue,
    체험안내: expGuideValue,
    "체험가능 연령": expAgeRangeValue,
    "세계문화유산 유무": heritage1Value,
    "세계자연유산 유무": heritage2Value,
    "세계기록유산 유무": heritage3Value,
    전화번호: infoCenterValue,
    주차시설: commonParkingValue,
    이용시기: useSeasonValue,
    이용시간: useTimeValue,
    쉬는날: restDateValue,
  };

  const synth = window.speechSynthesis;

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleButton = (newValue: string) => {
    getSpeech(newValue);
  };

  const handleValue = (tempKey: string, tempValue: string) => {
    const newValue = tempKey + tempValue;
    handleButton(newValue);
  };

  const handleMute = () => {
    synth.cancel();
  };

  return (
    <InfoBoxContainer>
      <InfoBox>
        <ul>
          {Object.entries(detailValue).map(([key, value]) => (
            <li key={key}>
              <InfoMainFontStyle>
                {key}
                <VolumeIcStyle
                  onClick={() => {
                    handleValue(key, value);
                  }}
                />
              </InfoMainFontStyle>
              <InfoFontStyle>
                <span dangerouslySetInnerHTML={{ __html: value }} />
              </InfoFontStyle>
            </li>
          ))}
        </ul>
        <StopSoundIcStyle
          onClick={() => {
            handleMute();
          }}
        />
      </InfoBox>
    </InfoBoxContainer>
  );
};

export default TourSpotDetailInfo;
