import DetailComponent from "../../components/Detail";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const infoField: string[] = [
  "유모차 대여",
  "애완동물 동반",
  "체험 가능 연령",
  "체험 안내",
  "세계문화유산 유무",
  "세계자연유산 유무",
  "세계기록유산 유무",
  "전화번호",
  "주차시설",
  "쉬는날",
  "이용시기",
  "이용시간",
];

const TourSpotDetailPage = () => {
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

export default TourSpotDetailPage;
