import {
  MainGridItems,
  RowGridContainer,
  RowGridItems,
  VolumeIcStyle,
  FolderIcStyle,
  HeartIcStyle,
  TitleContainer,
  TitleIcContainer,
  IcExpContainer,
  MainInfoContainer,
  MainImgContainer,
  MainBtnContainer,
} from "./styles";

import Button from "../../components/common/Button";
import ButtonNon from "../../components/common/ButtonNon";

import earIc from "../../assets/icon/earIc.svg";
import eyeIc from "../../assets/icon/eyeIc.svg";
import oldmanIc from "../../assets/icon/oldmanIc.svg";
import bathchairIc from "../../assets/icon/bathchairIc.svg";
import toddlerIc from "../../assets/icon/toddlerIc.svg";

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
        <RowGridItems>
          <TitleContainer>
            <TitleIcContainer>
              <p>{dummyData.info?.title}</p>
              <VolumeIcStyle />
            </TitleIcContainer>
            <TitleIcContainer>
              <IcExpContainer>
                <FolderIcStyle />
                <p>코스 추가</p>
              </IcExpContainer>
              <IcExpContainer>
                <HeartIcStyle />
                <p>관심</p>
              </IcExpContainer>
            </TitleIcContainer>
          </TitleContainer>

          <MainInfoContainer>
            <MainImgContainer></MainImgContainer>
            <MainBtnContainer>
              <Button disabled={true} imageSrc={bathchairIc}>
                지체장애
              </Button>
              <ButtonNon
                icSrc={earIc}
                isIc={true}
                text={"지체장애"}
                disable={1}
              />
              <ButtonNon
                icSrc={oldmanIc}
                isIc={true}
                text={"노인"}
                disable={0}
              />
            </MainBtnContainer>
          </MainInfoContainer>
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default DetailPage;
