import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  LikedIcStyle,
  BarrierIconContainer,
  BathchairIcStyle,
  EyeIcStyle,
  EarIcStyle,
  OldmanIcStyle,
  ToddlerIcStyle,
} from "./styles";
import { ListType } from "../../../../types/tripListTypes";
import exampleImg from "../../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";

interface TripCardItemProps {
  contents: ListType;
  type: string;
}

function TripCardItem({ contents, type }: TripCardItemProps) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    // 로그인 유저 & 즐길거리인 경우 -> 최근 본 관광지 contentId를 local에 저장
    if (
      token !== null && [12, 14, 28, 38].includes(contents.contentTypeId)
    ) {
      localStorage.setItem("recentContentId", contents.contentId.toString());
    }

    switch (contents.contentTypeId) {
      case 39:
        navigate(`/detail/restaurant/${contents.contentId}`);
        break;
      case 32:
        navigate(`/detail/accommodation/${contents.contentId}`);
        break;
      case 12:
        navigate(`/detail/tourspot/${contents.contentId}`);
        break;
      case 14:
        navigate(`/detail/culture/${contents.contentId}`);
        break;
      case 28:
        navigate(`/detail/leports/${contents.contentId}`);
        break;
      case 38:
        navigate(`/detail/shopping/${contents.contentId}`);
        break;
      default:
        break;
    }
  };

  return (
    <CardContainer>
      <ImageContainer onClick={handleClick}>
        {contents.imageUrl === "0" ? (
          <CardImage src={exampleImg} alt={"대표 이미지"} />
        ) : (
          <CardImage src={contents.imageUrl} alt={"대표 이미지"} />
        )}
        <BarrierIconContainer>
          {contents.mobilityWeak ? <BathchairIcStyle /> : null}
          {contents.visuallyImpaired ? <EyeIcStyle /> : null}
          {contents.deaf ? <EarIcStyle /> : null}
          {contents.old ? <OldmanIcStyle /> : null}
          {contents.infant ? <ToddlerIcStyle /> : null}
        </BarrierIconContainer>
      </ImageContainer>
      <CardBottomContainer>
        <CardText onClick={handleClick}>{contents.title}</CardText>
        {type === "list" && <LikedIcStyle />}
      </CardBottomContainer>
    </CardContainer>
  );
}

export default TripCardItem;
