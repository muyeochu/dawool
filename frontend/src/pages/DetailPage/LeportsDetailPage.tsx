import DetailComponent from "../../components/Detail";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const infoField: string[] = [
  "수용 인원",
  "유모차 대여",
  "애완동물 동반",
  "체험 가능 연령",
  "문의 및 안내",
  "개장 기간",
  "주차 요금",
  "주차 시설",
  "예약 안내",
  "쉬는 날",
  "입장료",
  "이용 시간",
];

const LeportsDetailPage = () => {
  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>{/* <DetailComponent /> */}</RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default LeportsDetailPage;
