import React, { Suspense, useState } from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import styled from "styled-components";
import { EtcListType } from "../../../types/tripListTypes";
import { RestaurantListSelector } from "../../../recoil/TripListSelector";

import Button from "../../common/Button";
import { TripListContainer, TripListTitle, ButtonList } from "./styles";
import TripCardList from "./tripCardList";
import Loading from "../../common/Loading";

interface TripListTitleProps {
  titleType: string;
}

export default function TripList({ titleType }: TripListTitleProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  let title =
    titleType === "restaurant"
      ? "식당"
      : titleType === "accommodation"
      ? "숙박"
      : "none";

  const tripList = useRecoilValue(RestaurantListSelector);
  console.log(tripList);

  return (
    <TripListContainer>
      <Suspense fallback={<Loading/>}>
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

        {tripList && <TripCardList list={tripList} />}
      </Suspense>
    </TripListContainer>
  );
}
