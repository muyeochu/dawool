import {
  VolumeIcStyle,
  FolderIcStyle,
  HeartIcStyle,
  TitleContainer,
  TitleIcContainer,
  IcExpContainer,
  MainInfoContainer,
  MainImgContainer,
  MaingImgStyle,
  MainBtnInfoContainer,
  MainBtnContainer,
} from "./styles";

import AccommodationDetailInfo from "./AccommodationDetailInfo";
import CultureDetailInfo from "./CultureDetailInfo";
import TourSpotDetailInfo from "./TourSpotDetailInfo";
import LeportsDetailInfo from "./LeportsDetailInfo";
import ShoppingDetailInfo from "./ShoppingDetailInfo";
import RestaurantDetailInfo from "./RestaurantDetailInfo";
import BarrierTag from "./BarrierTag";
import Map from "./Map";
import DetailBtn from "../common/DetailBtn";

import logo from "../../assets/icon/logoIc.svg";

const DetailComponent = ({
  myData,
  location,
}: {
  myData: any;
  location: number;
}) => {
  // 맵 좌표
  const mapInfo = {
    mapX: myData.info.mapX,
    mapY: myData.info.mapY,
  };

  return (
    <>
      <TitleContainer title={myData.info.title}>
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
            <MaingImgStyle src={logo} alt={"로고 이미지"} />
          ) : (
            <MaingImgStyle src={myData.info.firstImage} alt={"대표 이미지"} />
          )}
        </MainImgContainer>
        <MainBtnInfoContainer>
          <MainBtnContainer>
            {myData.info.mobilityWeak ? (
              <DetailBtn icType={"bathchair"} text={"지체장애"} disable={1} />
            ) : (
              <DetailBtn icType={"bathchair"} text={"지체장애"} disable={0} />
            )}
            {myData.info.visuallyImpaired ? (
              <DetailBtn icType={"eye"} text={"시각장애"} disable={1} />
            ) : (
              <DetailBtn icType={"eye"} text={"시각장애"} disable={0} />
            )}
            {myData.info.deaf ? (
              <DetailBtn icType={"ear"} text={"청각장애"} disable={1} />
            ) : (
              <DetailBtn icType={"ear"} text={"청각장애"} disable={0} />
            )}
            {myData.info.old ? (
              <DetailBtn icType={"oldman"} text={"노인"} disable={1} />
            ) : (
              <DetailBtn icType={"oldman"} text={"노인"} disable={0} />
            )}
            {myData.info.infant ? (
              <DetailBtn icType={"toddler"} text={"영유아"} disable={1} />
            ) : (
              <DetailBtn icType={"toddler"} text={"영유아"} disable={0} />
            )}
          </MainBtnContainer>
          {location === 32 && <AccommodationDetailInfo myData={myData} />}
          {location === 14 && <CultureDetailInfo myData={myData} />}
          {location === 12 && <TourSpotDetailInfo myData={myData} />}
          {location === 28 && <LeportsDetailInfo myData={myData} />}
          {location === 38 && <ShoppingDetailInfo myData={myData} />}
          {location === 39 && <RestaurantDetailInfo myData={myData} />}
        </MainBtnInfoContainer>
      </MainInfoContainer>

      {/* <BarrierTag barrierInfo={myData.info.barrier} /> */}
      <Map mapInfo={mapInfo} />
    </>
  );
};

export default DetailComponent;
