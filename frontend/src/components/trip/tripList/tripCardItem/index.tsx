import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/UserState";
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
  const [user, setUser] = useRecoilState(userState);

  const handleClick = () => {
    // 로그인한 경우 -> 최근 본 관광지 contentId를 local에 저장
    if (user.accessToken !== "") {
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
          {contents.mobilityWeak ? (
            <BathchairIcStyle/>
          ) : null}
          {contents.visuallyImpaired ? (
            <EyeIcStyle/>
          ) : null}
          {contents.deaf ? (
            <EarIcStyle/>
          ) : null}
          {contents.old ? (
            <OldmanIcStyle/>
          ) : null}
          {contents.infant ? (
            <ToddlerIcStyle/>
          ) : null}
        </BarrierIconContainer>
      </ImageContainer>
      <CardBottomContainer>
        <CardText onClick={handleClick}>{contents.title}</CardText>
        {type ==="list" && <LikedIcStyle />}
      </CardBottomContainer>
    </CardContainer>
  );
}

export default TripCardItem;
