import React, { useState, useEffect } from "react";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  LikedIcStyle,
} from "./styles";
// 임시 데이터
import restaurantData from "../sample.json";

const TripCardItem = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src="http://tong.visitkorea.or.kr/cms/resource/10/2684510_image2_1.jpg" />
      </ImageContainer>
      <CardBottomContainer>
        <CardText>[백년가게]청해진</CardText>
        <LikedIcStyle />
      </CardBottomContainer>
    </CardContainer>
  );
};

export default TripCardItem;
