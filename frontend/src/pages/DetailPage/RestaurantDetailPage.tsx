import DetailComponent from "../../components/Detail";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const infoField: string[] = [
  "신용카드",
  "대표 메뉴",
  "문의 및 안내",
  "어린이 놀이방",
  "영업 시간",
  "포장",
  "주차 시설",
  "예약 안내",
  "쉬는 날",
  "메뉴",
];

const RestaurantDetailPage = () => {
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

export default RestaurantDetailPage;
