import React from "react";
import { RecCardContainer, RecImageContainer, RecCardImage } from "./styles";
import exampleImg from "../../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";

function TripRecCardItem() {
  const navigate = useNavigate();

  return (
    <RecCardContainer>
      <RecImageContainer>
        <RecCardImage src={exampleImg} alt={"대표 이미지"}/>
      </RecImageContainer>
    </RecCardContainer>
  )
}

export default TripRecCardItem;