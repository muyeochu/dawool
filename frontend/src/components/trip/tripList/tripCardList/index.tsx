import React from "react";
import { useRecoilValue, selector } from "recoil";
import {
  RestaurantListSelector,
  AccommodationListSelector,
} from "../../../../recoil/TripListSelector";
import TripCardItem from "../tripCardItem";
import { TripCardListContainer } from "./styles";
import { TripListTitleType, ListType} from "../../../../types/tripListTypes";

const emptyListSelector = selector<ListType[]>({
  key: "emptyListSelector",
  get: () => [],
});

function TripCardList({ titleType }: TripListTitleType) {
  // Recoil에서 식당 or 숙박 상태 가져옴
  let etcTripList = useRecoilValue<ListType[]>(
    titleType === "restaurant"
      ? RestaurantListSelector
      : titleType === "accommodation"
      ? AccommodationListSelector
      : emptyListSelector
  );

  // console.log(etcTripList)

  // if (!Array.isArray(etcTripList)) {
  //   console.error("etcTripList is not an array");
  //   etcTripList = [etcTripList];
  // }

  // console.log(etcTripList)
  

  return (
    <TripCardListContainer>
      {etcTripList.map((item) => (
        <TripCardItem key={item.contentId} contents={item} />
      ))}
    </TripCardListContainer>
  );
}

export default TripCardList;
