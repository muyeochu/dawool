import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

import DetailComponent from "../../components/Detail";

const dummyData = {
  info: {
    contentId: "1",
    title: "경주 보문단지",
    homepage: "관련 홈페이지",
    firstImage: "대표 이미지 주소",
    addr1: "경주어쩌구저쩌구",
    mapX: "123",
    maxY: "321",
    deaf: 1,
    visuallyImparied: 1,
    mobilityWeak: 1,
    old: 1,
    infant: 0,
    isLiked: true,
    data: {
      chkbabycarriageculture: "유모차 대여 가능",
      chkpetculture: "애완동물 동반 가능",
      discountinfo: "할인됨",
      infocenterculture: "문의 및 안내정보",
      parkingculture: "주차시설 있음",
      parkingfee: "주차요금 1000원",
      restdateculture: "매주 목요일 휴무",
      usefee: "성인 20000원",
      usetimeculture: "09:00 ~ 17:00",
      spendtime: "약 1시간",
    },
    barrier: {
      parking: "장애인 주차 구역",
      restroom: "장애인 전용 화장실 있음",
      lactationroom: "수유실 있음",
    },
  },
};

const DetailPage = () => {
  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>{/* <DetailComponent /> */}</RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default DetailPage;
