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

const DetailComponent = ({ infoField }: accommodationFieldTypes) => {
  return (
    <>
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
        <MainBtnInfoContainer>
          <MainBtnContainer>
            <DetailBtn
              icType={"bathchair"}
              text={"지체장애"}
              disable={dummyData.info.mobilityWeak}
            />
            <DetailBtn
              icType={"eye"}
              text={"시각장애"}
              disable={dummyData.info.visuallyImpaired}
            />
            <DetailBtn
              icType={"ear"}
              text={"청각장애"}
              disable={dummyData.info.deaf}
            />
            <DetailBtn
              icType={"oldman"}
              text={"노인"}
              disable={dummyData.info.old}
            />
            <DetailBtn
              icType={"toddler"}
              text={"영유아"}
              disable={dummyData.info.infant}
            />
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
