import React from "react";
import { TripRecCardListContainer } from "./styles";
import TripRecCardItem from "../tripRecCardItem";

// interface TripRecCardListProps {
//   RecList: ListType[];
// }
// const TripRecCardList() => {
const TripRecCardList = () => {
  return (
    <TripRecCardListContainer>
      {/* {RecList.map((item: ListType) => )}
      <TripRecCardItem /> */}
      <TripRecCardItem />
      <TripRecCardItem />
      <TripRecCardItem />
      <TripRecCardItem />
    </TripRecCardListContainer>
  );
};

export default TripRecCardList;
