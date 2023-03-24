import React from "react";
import { useRecoilValue, selector } from "recoil";
import {
  RestaurantListSelector,
  AccommodationListSelector,
  TourSpotListSelector,
  CultureListSelector,
  LeportsListSelector,
  ShoppingListSelector,
} from "../../../../recoil/TripListSelector";
import TripCardItem from "../tripCardItem";
import { TripCardListContainer } from "./styles";
import { TripListTitleType, ListType } from "../../../../types/tripListTypes";

const emptyListSelector = selector<ListType[]>({
  key: "emptyListSelector",
  get: () => [],
});

function TripCardList({ titleType }: TripListTitleType) {

  let etcTripList = useRecoilValue<ListType[]>(
    titleType === "restaurant"
      ? RestaurantListSelector
      : titleType === "accommodation"
      ? AccommodationListSelector
      : titleType === "tourSpot"
      ? TourSpotListSelector
      : titleType === "culture"
      ? CultureListSelector
      : titleType === "leports"
      ? LeportsListSelector
      : titleType === "shopping"
      ? ShoppingListSelector
      : emptyListSelector
  );

  return (
    <TripCardListContainer>
      {etcTripList && etcTripList.map((item) => (
        <TripCardItem key={item.contentId} contents={item} />
      ))}
    </TripCardListContainer>
  );
}

export default TripCardList;
