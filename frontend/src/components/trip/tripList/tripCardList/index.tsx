import React from "react";
import TripCardItem from "../tripCardItem";
import { TripCardListContainer } from "./styles";
import { EtcListType } from "../../../../types/tripListTypes";

interface TripCardListProps {
  list: EtcListType[];
}

function TripCardList({ list }: TripCardListProps) {
  return (
    <TripCardListContainer>
      {list.map((content) => (
        <TripCardItem key={content.contentId} content={content} />
      ))}
    </TripCardListContainer>
  );
}

export default TripCardList;
