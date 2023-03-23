import {
  VolumeIcStyle,
  FolderIcStyle,
  HeartIcStyle,
  TitleContainer,
  TitleIcContainer,
  IcExpContainer,
  MainInfoContainer,
  MainImgContainer,
  MainBtnInfoContainer,
  MainBtnContainer,
  InfoBox,
} from "./styles";

import { accommodationFieldTypes } from "../../types/accommodationTypes";

import { dummyData } from "./dummy";

import DetailBtn from "../common/DetailBtn";

import { DetailInfoTypes } from "../../types/detailTypes";

import logo from "../../assets/icon/logoIc.svg";
import AccommodationDetailInfo from "./AccommodationDetailInfo";

export interface temptTypes {
  myData: {
    info: {
      [key: string]: any;
      contentId: number;
      title: string;
      homepage: string;
      firstImage: string;
      areaCode: number;
      addr1: string;
      mapX: number;
      mapY: number;
      mlevel: number;
      category: string;
      isLiked: boolean;
      hit: number;
      deaf: number;
      visuallyImpaired: number;
      mobilityWeak: number;
      old: number;
      infant: number;
      barrier: {
        parking?: string;
        route?: string;
        publicTransport?: string;
        ticketOffice?: string;
        promotion?: string;
        wheelchair?: string;
        exit?: string;
        elevator?: string;
        restroom?: string;
        auditorium?: string;
        room?: string;
        handicapEtc?: string;
        braileBlock?: string;
        helpDog?: string;
        guideHuman?: string;
        audioGuide?: string;
        bigPrint?: string;
        brailePromotion?: string;
        guideSystem?: string;
        blindHandicapEtc?: string;
        signGuide?: string;
        videoGuide?: string;
        hearingRoom?: string;
        hearingHandicapEtc?: string;
        stroller?: string;
        lactationRoom?: string;
        babySpareChair?: string;
        infantsFamilyEtc?: string;
      };
    };
  };
}

// type Props = {
//   myData?: Array<temptTypes>;
// };

const DetailComponent = ({
  myData,
  location,
}: {
  myData: any;
  location: number;
}) => {
  console.log("받아온 myData는?", myData);
  console.log("location은?", location);

  return (
    <>
      <TitleContainer>
        <TitleIcContainer>
          <p>{myData.info.title}</p>
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
        <MainImgContainer>
          {myData.info.firstImage === "0" ? (
            <img src={logo} />
          ) : (
            <img src={myData.info.firstImage} alt={"대표 이미지"} />
          )}
        </MainImgContainer>
        <MainBtnInfoContainer>
          <MainBtnContainer>
            <DetailBtn
              icType={"bathchair"}
              text={"지체장애"}
              disable={myData.info.mobilityWeak}
            />
            <DetailBtn
              icType={"eye"}
              text={"시각장애"}
              disable={myData.info.visuallyImpaired}
            />
            <DetailBtn
              icType={"ear"}
              text={"청각장애"}
              disable={myData.info.deaf}
            />
            <DetailBtn
              icType={"oldman"}
              text={"노인"}
              disable={myData.info.old}
            />
            <DetailBtn
              icType={"toddler"}
              text={"영유아"}
              disable={myData.info.infant}
            />
          </MainBtnContainer>
          {location === 32 && <AccommodationDetailInfo myData={myData} />}
        </MainBtnInfoContainer>
      </MainInfoContainer>
    </>
  );
};

export default DetailComponent;
