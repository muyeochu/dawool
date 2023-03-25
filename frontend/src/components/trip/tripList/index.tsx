import React, { useState } from "react";
import { useRecoilState } from "recoil";
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
import { City } from "../../../types/regionTypes";
import { cityState } from "../../../recoil/RegionState";

function TripList({ titleType }: TripListTitleType) {
  const [isClicked, setIsClicked] = useState(false);
  const [citySelected, setCitySelected] = useState("");
  const [cityStateData] = useRecoilState(cityState);

  const handleCitySelected = (city: string | TripListTitleType) => {
    if (typeof city === "string") {
      setCitySelected(city);
      setIsClicked(false);
    }
  };

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
        <Dropdown
          itemList={cityStateData.map((city: City) => city.name)}
          onItemSelected={handleCitySelected}
        >
          <span>{citySelected || "지역 선택"}</span>
        </Dropdown>
      </ButtonGroup>

      <TripCardList titleType={titleType} />
    </TripListContainer>
  );
}

export default TripList;
