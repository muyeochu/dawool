import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FolderIcStyle,
  HeartIcStyle,
  LikedIcStyle,
  TitleContainer,
  CateBtnStyle,
  TitleIcContainer,
  IcExpContainer,
  MainInfoContainer,
  MainImgContainer,
  MaingImgStyle,
  MainBtnInfoContainer,
  MainBtnContainer,
} from "./styles";

import exampleImg from "../../assets/images/exampleImg.png";

import AccommodationDetailInfo from "./AccommodationDetailInfo";
import CultureDetailInfo from "./CultureDetailInfo";
import TourSpotDetailInfo from "./TourSpotDetailInfo";
import LeportsDetailInfo from "./LeportsDetailInfo";
import ShoppingDetailInfo from "./ShoppingDetailInfo";
import RestaurantDetailInfo from "./RestaurantDetailInfo";
import BarrierTag from "./BarrierTag";
import Map from "./Map";
import DetailBtn from "../common/DetailBtn";
import { bookmark } from "../../recoil/BookmarkSelector";
import useModal from "../utils/useModal";

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

  const navigate = useNavigate();
  const [heart, setHeart] = useState<boolean>(myData.info.liked);
  const token = localStorage.getItem("token") || "0";
  const { openModal, closeModal } = useModal();

  function createTage() {
    const div = document.getElementById("ExpContainer");
    div?.setAttribute("contentId", myData.info.contentId);
    div?.setAttribute("contentTypeId", myData.info.contentTypeId);
    div?.setAttribute("title", myData.info.title);
    div?.setAttribute("mapX", myData.info.mapX);
    div?.setAttribute("mapY", myData.info.mapY);
  }
  createTage();

  const modalDataL = {
    type: "course",
    content: <></>,
    callback: () => {
      closeModal();
    },
  };
  return (
    <>
      <TitleContainer title={myData.info.title}>
        <p>{myData.info.title}</p>

        <TitleIcContainer>
          <div id="ExpContainer">
            <IcExpContainer
              onClick={() => {
                openModal(modalDataL);
              }}
            >
              <FolderIcStyle />
              <p>코스 추가</p>
            </IcExpContainer>
          </div>
          <IcExpContainer
            onClick={async () => {
              if (token !== "0") {
                const liked = await bookmark(myData.info);
                setHeart(liked);
              } else {
                alert("로그인이 필요합니다.");
                navigate("/login");
              }
            }}
          >
            {heart ? <HeartIcStyle /> : <LikedIcStyle />}
            <p>관심</p>
          </IcExpContainer>
        </TitleIcContainer>
      </TitleContainer>
      {myData.info.category && (
        <CateBtnStyle>
          <span># {myData.info.category}</span>
        </CateBtnStyle>
      )}

      <MainInfoContainer>
        <MainImgContainer>
          {myData.info.firstImage === "0" ? (
            <MaingImgStyle src={exampleImg} alt={"로고 이미지"} />
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

      <BarrierTag barrierInfo={myData.info.barrier} />
      <Map mapInfo={mapInfo} />
    </>
  );
};

export default DetailComponent;
