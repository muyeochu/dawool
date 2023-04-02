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

const ShoppingDetailInfo = ({ myData }: any) => {
  const addValue = myData.info.addr1 === "0" ? "없음" : myData.info.addr1;
  const homepageValue =
    myData.info.homepage === "0" ? "없음" : myData.info.homepage;
  const isBabyCarriageValue = myData.info.isBabyCarriage ? "가능" : "불가능";
  const isPetValue = myData.info.isPet ? "가능" : "불가능";
  const fairDayValue =
    myData.info.fairDay === "0" ? "없음" : myData.info.fairDay;
  const infoCenterValue =
    myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter;
  const openTimeValue =
    myData.info.openTime === "0" ? "없음" : myData.info.openTime;
  const commonParkingValue =
    myData.info.commonParking === "0" ? "없음" : myData.info.commonParking;
  const restroomValue =
    myData.info.restroom === "0" ? "없음" : myData.info.restroom;
  const saleItemValue =
    myData.info.saleItem === "0" ? "문의 필요" : myData.info.saleItem;
  const shopGuideValue =
    myData.info.shopGuide === "0" ? "없음" : myData.info.shopGuide;
  const restDateValue =
    myData.info.restDate === "0" ? "없음" : myData.info.restDate;

  const detailValue = {
    주소: addValue,
    홈페이지: homepageValue,
    "유모차 대여": isBabyCarriageValue,
    "애완동물 동반": isPetValue,
    장서는날: fairDayValue,
    "문의 및 안내": infoCenterValue,
    영업시간: openTimeValue,
    주차시설: commonParkingValue,
    쉬는날: restDateValue,
    화장실: restroomValue,
    판매품목: saleItemValue,
    매장안내: shopGuideValue,
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
    const newValue = tempKey  + tempValue;
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

export default ShoppingDetailInfo;
