import DetailComponent from "../../components/Detail";
import {
  accommodationFieldTypes,
  acccommodationTypes,
} from "../../types/accommodationTypes";
import { dummyData } from "../../components/Detail/dummy";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const infoField: accommodationFieldTypes = {
  checkInTime: "입실 시간",
  checkOutTime: "퇴실 시간",
  isCooking: "취사 여부",
  foodPlace: "식음료장",
  hanok: "한옥 여부",
  infoCenter: "문의 및 안내",
  commonParking: "주차 시설",
  pickup: "픽업 서비스",
  reservationUrl: "예약 안내 홈페이지",
  subFacility: "부대 시설",
  barbecue: "바베큐장",
  fitness: "휘트니스 센터",
  beverage: "음료",
  bicycle: "자전거 대여",
  campfire: "캠프파이어",
  karaoke: "노래방",
  publicBath: "공용 샤워실",
  publicPc: "공용 PC방",
  sauna: "사우나실",
  sports: "스포츠 시설",
  refundRegulation: "환불 규정",
};

const AccommodationDetailPage = () => {
  // const result = {};
  // for (const key in infoField) {
  //   const value = infoField[key];
  //   result[value] = dummyData[key];
  // }

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          <DetailComponent />
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default AccommodationDetailPage;
