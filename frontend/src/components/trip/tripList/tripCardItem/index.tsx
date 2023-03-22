import React, { useState, useEffect } from "react";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  LikedIcStyle,
} from "./styles";
import { EtcListType } from "../../../../types/tripListTypes";

// 임시 데이터
import restaurantData from "../sample.json";

function TripCardItem({content}: {content: EtcListType}) {
  const tripInfo = {...content};

  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src="http://tong.visitkorea.or.kr/cms/resource/10/2684510_image2_1.jpg" />
      </ImageContainer>
      <CardBottomContainer>
        <CardText>{content.title}</CardText>
        <LikedIcStyle />
      </CardBottomContainer>
    </CardContainer>
  );
};

export default TripCardItem;
