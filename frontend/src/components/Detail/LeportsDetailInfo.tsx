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

const LeportsDetailInfo = ({ myData }: any) => {
  const addValue = myData.info.addr1 === "0" ? "없음" : myData.info.addr1;
  const homepageValue =
    myData.info.homepage === "0" ? "없음" : myData.info.homepage;
  const isBabyCarriageValue = myData.info.isBabyCarriage ? "가능" : "불가능";
  const isPetValue = myData.info.isPet ? "가능" : "불가능";
  const expAgeRangeValue =
    myData.info.expAgeRange === "0" ? "없음" : myData.info.expAgeRange;
  const infoCenterValue =
    myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter;
  const openPeriodValue =
    myData.info.openPeriod === "0" ? "없음" : myData.info.openPeriod;
  const commonParkingValue =
    myData.info.commonParking === "0" ? "없음" : myData.info.commonParking;
  const parkingFeeValue =
    myData.info.parkingFee === "0" ? "문의 필요" : myData.info.parkingFee;
  const reservationValue =
    myData.info.reservation === "0" ? "없음" : myData.info.reservation;
  const useFeeValue =
    myData.info.useFee === "0" ? "문의 필요" : myData.info.useFee;
  const useTimeValue =
    myData.info.useTime === "0" ? "문의 필요" : myData.info.useTime;
  const restDateValue =
    myData.info.restDate === "0" ? "없음" : myData.info.restDate;

  const detailValue = {
    주소: addValue,
    홈페이지: homepageValue,
    "유모차 대여": isBabyCarriageValue,
    "애완동물 동반": isPetValue,
    "체험가능 연령": expAgeRangeValue,
    "문의 및 안내": infoCenterValue,
    개장기간: openPeriodValue,
    주차시설: commonParkingValue,
    주차요금: parkingFeeValue,
    예약안내: reservationValue,
    입장료: useFeeValue,
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
      </InfoBox>
      <StopSoundIcStyle
        onClick={() => {
          handleMute();
        }}
      />
    </InfoBoxContainer>
  );
};

export default LeportsDetailInfo;
