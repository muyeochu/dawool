import React from "react";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  LikedIcStyle,
} from "./styles";
import { ListType } from "../../../../types/tripListTypes";
import exampleImg from "../../../../assets/images/exampleImg.png";

interface TripCardItemProps {
  contents: ListType;
}

function TripCardItem({ contents }: TripCardItemProps) {
  return (
    <CardContainer>
      <ImageContainer>
        {contents.imageUrl === "0" ? (
          <CardImage src={exampleImg} alt={"대표 이미지"} />
        ) : (
          <CardImage src={contents.imageUrl} alt={"대표 이미지"} />
        )}
      </ImageContainer>
      <CardBottomContainer>
        <CardText>{contents.title}</CardText>
        <LikedIcStyle />
      </CardBottomContainer>
    </CardContainer>
  );
}

export default TripCardItem;
