import React from "react";
import TripCardItem from "../tripCardItem";
import { TripCardListContainer } from "./styles";
import { EtcListType } from "../../../../types/tripListTypes";

function TripCardList({list} : {list: EtcListType[]}) {
  return (
    <TripCardListContainer>
      {list.map(content => (
        <TripCardItem content={content} />
      ))}
    </TripCardListContainer>
  )
}

export default TripCardList;