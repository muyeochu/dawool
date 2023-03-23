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
// import restaurantData from "../sample.json";

function TripCardItem({content}: {content: EtcListType}) {

  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={content.imageUrl!} />
      </ImageContainer>
      <CardBottomContainer>
        <CardText>{content.title}</CardText>
        <LikedIcStyle />
      </CardBottomContainer>
    </CardContainer>
  );
};

export default TripCardItem;
