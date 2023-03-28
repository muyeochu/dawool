import React from "react";
import { useRecoilValue } from "recoil";
import { getListSelector } from "../../../../recoil/TripListSelector";
import TripCardItem from "../tripCardItem";
import { TripCardListContainer } from "./styles";
import { ListType, TripListTitleType } from "../../../../types/tripListTypes";
import { citiesState } from "../../../../recoil/RegionState";

interface TripCardListProps {
  titleType: TripListTitleType["titleType"];
  tripList: ListType[];
}

function TripCardList({ titleType, tripList }: TripCardListProps) {
  const cityList = useRecoilValue(citiesState);
  const selectedCity = cityList?.find((city) => city.id) ?? { id: 1 };
  const filteredList = useRecoilValue(
    getListSelector({
      titleType,
      citySelected: selectedCity.id,
      area: selectedCity.id,
      barrier: "10000",
      page: 0,
      size: 10,
    })
  );

  return (
    <TripCardListContainer>
      {filteredList && filteredList.map((item: ListType) => (
        <TripCardItem type="list" key={item.contentId} contents={item} />
      ))}
    </TripCardListContainer>
  );
}

export default TripCardList;
