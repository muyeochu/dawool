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

const RestaurantDetailInfo = ({ myData }: any) => {
  const addValue = myData.info.addr1 === "0" ? "없음" : myData.info.addr1;
  const homepageValue =
    myData.info.homepage === "0" ? "없음" : myData.info.homepage;
  const firstMenuValue =
    myData.info.firstMenu === "0" ? "없음" : myData.info.firstMenu;
  const treatMenuValue =
    myData.info.treatMenu === "0" ? "없음" : myData.info.treatMenu;
  const openTimeValue =
    myData.info.openTime === "0" ? "없음" : myData.info.openTime;
  const commonParkingValue =
    myData.info.commonParking === "0" ? "없음" : myData.info.commonParking;
  const restDateValue =
    myData.info.restDate === "0" ? "없음" : myData.info.restDate;
  const isCreditCardValue = myData.info.isCreditCard ? "가능" : "불가능";
  const kidsFacilityValue = myData.info.kidsFacility ? "있음" : "없음";
  const packingValue =
    myData.info.packing === "0" ? "문의 필요" : myData.info.packing;
  const infoCenterValue =
    myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter;

  const detailValue = {
    주소: addValue,
    홈페이지: homepageValue,
    대표메뉴: firstMenuValue,
    메뉴: treatMenuValue,
    영업시간: openTimeValue,
    쉬는날: restDateValue,
    주차시설: commonParkingValue,
    "신용카드 가능": isCreditCardValue,
    "어린이 놀이방": kidsFacilityValue,
    포장: packingValue,
    "문의 및 안내": infoCenterValue,
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

export default RestaurantDetailInfo;
