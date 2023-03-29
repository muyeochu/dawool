import React from "react";
// import { TripRecCardListContainer } from "./styles";
import TripRecCardItem from "../tripRecCardItem";
import { recommendListType } from "../../../../types/recListTypes";

interface TripRecCardListProps {
  RecList: { contents: recommendListType[] };
}

const TripRecCardList = ({ RecList }: TripRecCardListProps) => {
  const { contents } = RecList;

  // return (
    // <TripRecCardListContainer>
    //   {contents.map((item: recommendListType) => (
    //     <TripRecCardItem key={item.contentId} item={item} />
    //   ))}
    // </TripRecCardListContainer>
  // )
};

export default TripRecCardList;
