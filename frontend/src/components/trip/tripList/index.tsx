import React, { useState } from "react";
import { useRecoilValue, RecoilRoot } from "recoil";
import styled from "styled-components";
import { TripDataType, ListType } from "../../../types/tripListTypes";
import { TripListSelector } from "../../../recoil/TripListSelector";

import Button from "../../common/Button";
import { TripListContainer, TripListTitle, ButtonList } from "./styles";
import TripCardList from "./tripCardList";

type EtcTripDataType = {
  data: ListType[];
};
interface TripListProps {
  titleType: string;
  tripList: TripDataType["data"];
}

function TripList({ titleType, tripList }: TripListProps) {
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

  const etcTripList = useRecoilValue<EtcTripDataType | undefined>(
    TripListSelector
  );
  const processedTripList = etcTripList?.data || tripList;
  console.log(tripList);

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

      {/* 오류 회피를 위해, tripList가 있을 때만 렌더링 */}
      {processedTripList && <TripCardList list={processedTripList} />}
    </TripListContainer>
  );
}

export default TripList;
