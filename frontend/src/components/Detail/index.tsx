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

// export type temptTypes = {
//   info: {
//     contentId: number;
//     title: string;
//     homepage: string;
//     firstImage: string;
//     areaCode: number;
//     addr1: string;
//     mapX: number;
//     mapY: number;
//     mlevel: number;
//     category: string;
//     isLiked: boolean;
//     hit: number;
//     deaf: number;
//     visuallyImpaired: number;
//     mobilityWeak: number;
//     old: number;
//     infant: number;
//     barrier: {
//       parking?: string;
//       route?: string;
//       publicTransport?: string;
//       ticketOffice?: string;
//       promotion?: string;
//       wheelchair?: string;
//       exit?: string;
//       elevator?: string;
//       restroom?: string;
//       auditorium?: string;
//       room?: string;
//       handicapEtc?: string;
//       braileBlock?: string;
//       helpDog?: string;
//       guideHuman?: string;
//       audioGuide?: string;
//       bigPrint?: string;
//       brailePromotion?: string;
//       guideSystem?: string;
//       blindHandicapEtc?: string;
//       signGuide?: string;
//       videoGuide?: string;
//       hearingRoom?: string;
//       hearingHandicapEtc?: string;
//       stroller?: string;
//       lactationRoom?: string;
//       babySpareChair?: string;
//       infantsFamilyEtc?: string;
//     };
//     [key: string]: any;
//   };
// };

// type Props = {
//   myData?: Array<temptTypes>;
// };

const DetailComponent = ({ myData }: any) => {
  console.log("받아온 myData는?", myData);
  console.log(myData.info);
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
        <MainImgContainer></MainImgContainer>
        <MainBtnInfoContainer>
          <MainBtnContainer>
            <DetailBtn icType={"bathchair"} text={"지체장애"} disable={0} />
            <DetailBtn icType={"eye"} text={"시각장애"} disable={0} />
            <DetailBtn icType={"ear"} text={"청각장애"} disable={0} />
            <DetailBtn icType={"oldman"} text={"노인"} disable={0} />
            <DetailBtn icType={"toddler"} text={"영유아"} disable={0} />
          </MainBtnContainer>
          <InfoBox>
            <ul></ul>
          </InfoBox>
        </MainBtnInfoContainer>
      </MainInfoContainer>
    </>
  );
};

export default DetailComponent;
