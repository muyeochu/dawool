import { useEffect } from "react";
import { getSpeech } from "../utils/getSpeech";

import {
  InfoBox,
  InfoMainFontStyle,
  InfoFontStyle,
  VolumeIcStyle,
} from "./styles";

const AccommodationDetailInfo = ({ myData }: any) => {
  const addValue = myData.info.addr1 === "0" ? "없음" : myData.info.addr1;
  const homepageValue =
    myData.info.homepage === "0" ? "없음" : myData.info.homepage;
  const checkInTimeValue =
    myData.info.checkInTime === "0" ? "없음" : myData.info.checkInTime;
  const checkOutTimeValue =
    myData.info.checkOutTime === "0" ? "없음" : myData.info.checkOutTime;
  const isCookingValue =
    myData.info.isCooking === "0" ? "불가능" : myData.info.isCooking;
  const hanokValue = myData.info.hanok ? "한옥" : "한옥 아님";
  const infoCenterValue =
    myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter;
  const commonParkingValue =
    myData.info.commonParking === "0" ? "없음" : myData.info.commonParking;
  const pickupValue = myData.info.pickup === "0" ? "없음" : myData.info.pickup;
  const reservationUrlValue =
    myData.info.reservationUrl === "0" ? "없음" : myData.info.reservationUrl;
  const subFacilityValue =
    myData.info.subFacility === "0" ? "없음" : myData.info.subFacility;
  const barbecueValue = myData.info.barbecue ? "있음" : "없음";
  const fitnessValue = myData.info.fitness ? "있음" : "없음";
  const beverageValue = myData.info.beverage ? "있음" : "없음";
  const bicycleValue = myData.info.bicycle ? "있음" : "없음";
  const campfireValue = myData.info.campfire ? "있음" : "없음";
  const karaokeValue = myData.info.karaoke ? "있음" : "없음";
  const publicBathValue = myData.info.publicBath ? "있음" : "없음";
  const publicPcValue = myData.info.publicPc ? "있음" : "없음";
  const saunaValue = myData.info.sauna ? "있음" : "없음";
  const sportsValue = myData.info.sports ? "있음" : "없음";
  const refundRegulationValue =
    myData.info.refundRegulation === "0"
      ? "없음"
      : myData.info.refundRegulation;

  const detailValue = {
    주소: addValue,
    홈페이지: homepageValue,
    입실시간: checkInTimeValue,
    퇴실시간: checkOutTimeValue,
    "취사 여부": isCookingValue,
    "한옥 여부": hanokValue,
    "문의 및 안내": infoCenterValue,
    주차시설: commonParkingValue,
    "픽업 서비스": pickupValue,
    "예약안내 홈페이지": reservationUrlValue,
    부대시설: subFacilityValue,
    바베큐장: barbecueValue,
    "휘트니스 센터": fitnessValue,
    음료: beverageValue,
    "자전거 대여": bicycleValue,
    캠프파이어: campfireValue,
    노래방: karaokeValue,
    "공용 샤워실": publicBathValue,
    "공용 PC방": publicPcValue,
    사우나: saunaValue,
    스포츠시설: sportsValue,
    환불규정: refundRegulationValue,
  };

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleButton = (newValue: string) => {
    getSpeech(newValue);
  };

  const handleValue = (tempKey: string, tempValue: string) => {
    const newValue = tempKey + `\t` + tempValue;
    handleButton(newValue);
  };

  return (
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
  );
};

export default AccommodationDetailInfo;
