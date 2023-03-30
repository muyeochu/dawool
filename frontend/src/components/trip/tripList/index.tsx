import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../common/Button";
import {
  TripListContainer,
  TripListTitle,
  ButtonGroup,
  ButtonList,
  TripCardListContainer,
} from "./styles";
import TripCardItem from "./tripCardItem";
import { TripListTitleType } from "../../../types/tripListTypes";
import Dropdown from "../../common/Dropdown";
import { City } from "../../../types/regionTypes";
import { citiesState, citySelectedState } from "../../../recoil/RegionState";
import { getListSelector } from "../../../recoil/TripListSelector";
import { ListType } from "../../../types/tripListTypes";

export interface TripListProps {
  titleType: TripListTitleType["titleType"];
}

function TripList({ titleType }: TripListProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false); // 무장애 필터링 버튼 중 하나가 클릭되었는지 여부 나타내는 상태값
  const [citySelected, setCitySelected] =
    useRecoilState<number>(citySelectedState); // 선택된 도시의 ID 값 나타내는 상태값
  const [cityList, setCityList] = useRecoilState<City[]>(citiesState); // 지역 정보를 관리하는 citiesState recoil atom의 상태값
  // const cityList = useRecoilValue(citiesState);
  const selectedCity = cityList?.find((city) => city.id) ?? { id: 1 };

  // 드롭다운에서 선택된 도시에 맞는 여행 목록 가져옴
  const filteredList = useRecoilValue(
    getListSelector({
      titleType,
      area: citySelected,
      barrier: "10000",
      page: 0,
      size: 10,
    })
  );

  const cityInfo = cityList.find((city) => city.id === citySelected);
  const cityName = cityInfo ? cityInfo.name : cityList[0].name;

  const typeText =
    titleType === "restaurant"
      ? "식당"
      : titleType === "accommodation"
      ? "숙박"
      : titleType === "tourSpot"
      ? "관광지"
      : titleType === "culture"
      ? "문화시설"
      : titleType === "leports"
      ? "레포츠"
      : titleType === "shopping"
      ? "쇼핑"
      : "기타";

  // 드롭다운에서 도시 선택할 때 호출
  const onCitySelected = (city: string | TripListTitleType) => {
    // const selectedCity = Number(city as TripListTitleType);
    // setCitySelected(selectedCity);  // 이샛기 때문에.. 내가..!!!!
    setIsClicked(false);
  };

  // citySelected가 업데이트 될 때마다 실행되는 useEffect
  useEffect(() => {
    const getTripList = async () => {
      getListSelector({
        titleType,
        area: citySelected,
        barrier: "10000",
        page: 0,
        size: 10,
      });
    };
    getTripList();
  }, [titleType, citySelected]);

  // 버튼 클릭될 때마다 호출
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const buttons = [
    { id: 0, label: "지체장애인", icType: "bathchair", btType: 1 },
    { id: 1, label: "시각장애인", icType: "eye", btType: 1 },
    { id: 2, label: "청각장애인", icType: "ear", btType: 1 },
    { id: 3, label: "노인", icType: "oldman", btType: 1 },
    { id: 4, label: "영유아", icType: "toddler", btType: 1 },
  ];

  return (
    <TripListContainer id="trip-list-container">
      <TripListTitle>
        {cityName} {typeText} 목록
      </TripListTitle>
      <ButtonGroup>
        {/* 무장애 필터링 버튼 */}
        <ButtonList>
          {buttons.map(({ id, label, icType, btType }) => (
            <Button key={id} id={id} icType={icType} btType={btType}>
              {label}
            </Button>
          ))}
        </ButtonList>

        {/* 드롭다운 */}
        <Dropdown
          itemList={cityList.map((city: City) => city.name)}
          onSelected={onCitySelected}
        >
          <span>{cityName}</span>
        </Dropdown>
      </ButtonGroup>
      {/* 관광지 목록 */}

      {/* {filteredList && (
        <TripCardList titleType={titleType} tripList={filteredList} />
      )} */}
      {filteredList && (
        <TripCardListContainer>
          {filteredList.map((item: ListType) => (
            <TripCardItem type="list" key={item.contentId} contents={item} />
          ))}
        </TripCardListContainer>
      )}
    </TripListContainer>
  );
}

export default TripList;
