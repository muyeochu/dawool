import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import {
  TripListContainer,
  TripListTitle,
  ButtonGroup,
  ButtonList,
} from "./styles";
import TripCardList from "./tripCardList";
import { TripListTitleType } from "../../../types/tripListTypes";
import Dropdown from "../../common/Dropdown";

function TripList({ titleType }: TripListTitleType) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const typeText =
    titleType === "restaurant"
      ? "식당"
      : titleType === "accommodation"
      ? "숙박"
      : titleType === "tourSpot"
      ? "관광지"
      : titleType === "culture"
      ? "문화시설"
      : titleType === "leports"
      ? "레포츠"
      : titleType === "shopping"
      ? "쇼핑"
      : "기타";

  return (
    <TripListContainer>
      <TripListTitle>서울 {typeText} 목록</TripListTitle>
      <ButtonGroup>
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
        {/* <Dropdown data={[]} onClick={handleClick}>
          <span>지역 선택</span>
        </Dropdown> */}
      </ButtonGroup>

      <TripCardList titleType={titleType} />
    </TripListContainer>
  );
}

export default TripList;
