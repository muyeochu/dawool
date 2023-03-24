import DetailComponent from "../../components/Detail";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const infoField: string[] = [
  "유모차 대여",
  "신용카드",
  "애완동물 동반",
  "장 서는 날",
  "문의 및 안내",
  "영업 시간",
  "주차 시설",
  "쉬는 날",
  "화장실",
  "판매 품목",
  "매장 안내",
];

const ShoppingDetailPage = () => {
  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>{/* <DetailComponent /> */}</RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default ShoppingDetailPage;
