import React from "react";
import { TripRecCardListContainer } from "./styles";
import TripRecCardItem from "../tripRecCardItem";

function TripRecCardList() {
  return (
    <TripRecCardListContainer>
      <TripRecCardItem />
      <TripRecCardItem />
      <TripRecCardItem />
      <TripRecCardItem />
    </TripRecCardListContainer>
  );
}

export default TripRecCardList;
