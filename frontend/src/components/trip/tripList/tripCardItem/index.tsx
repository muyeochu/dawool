import React, { useState, useEffect } from "react";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  LikedIcStyle,
} from "./styles";
import { ListType } from "../../../../types/tripListTypes";
import exampleImg from "../../../../assets/images/exampleImg.svg"

interface TripCardItemProps {
  contents: ListType;
}

function TripCardItem({contents}: TripCardItemProps) {

  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={contents.imageUrl || exampleImg} />
      </ImageContainer>
      <CardBottomContainer>
        <CardText>{contents.title}</CardText>
        <LikedIcStyle />
      </CardBottomContainer>
    </CardContainer>
  );
};

export default TripCardItem;
