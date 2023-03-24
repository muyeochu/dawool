import DetailComponent from "../../components/Detail";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const infoField: string[] = [
  "유모차 대여",
  "애완동물 동반 가능",
  "할인 정보",
  "문의 및 안내",
  "주차 시설",
  "주차 요금",
  "쉬는 날",
  "이용 요금",
  "이용 시간",
  "관람 소요 시간",
];

const CultureDetailPage = () => {
  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>{/* <DetailComponent /> */}</RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default CultureDetailPage;
