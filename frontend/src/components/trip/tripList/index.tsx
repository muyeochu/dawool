import React, { useState } from "react";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import Button from "../../common/Button";
import { TripListContainer, TripListTitle, ButtonList } from "./styles";
import TripCardList from "./tripCardList";

interface TripListTitleProps {
  titleType: string;
}

export default function TripList({titleType}: TripListTitleProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  let title = 
    titleType === "restaurant" 
      ? "식당" 
      : titleType === "accommodation" 
      ? "숙박"
      :"none";

  return (
    <TripListContainer>
      <TripListTitle>서울 {title} 목록</TripListTitle>

      <ButtonList>
        <Button onClick={handleClick} icType={"bathchair"}>
          지체장애
        </Button>
        <Button onClick={handleClick} icType={"eye"}>
          시각장애
        </Button>
        <Button onClick={handleClick} icType={"ear"}>
          청각장애
        </Button>
        <Button onClick={handleClick} icType={"oldman"}>
          노인
        </Button>
        <Button onClick={handleClick} icType={"toddler"}>
          영유아
        </Button>
      </ButtonList>

      <TripCardList/>


    </TripListContainer>
  );
};
