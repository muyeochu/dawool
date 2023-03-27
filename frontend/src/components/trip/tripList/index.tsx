import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import Button from "../../common/Button";
import {
  TripListContainer,
  TripListTitle,
  ButtonGroup,
  ButtonList,
} from "./styles";
import TripCardList from "./tripCardList";
import { TripListTitleType, ListType } from "../../../types/tripListTypes";
import Dropdown from "../../common/Dropdown";
import { City } from "../../../types/regionTypes";
import { citiesState, citySelectedState } from "../../../recoil/RegionState";
import { getListSelector } from "../../../recoil/TripListSelector";

export interface TripListProps {
  titleType: TripListTitleType["titleType"];
}

function TripList({ titleType }: TripListProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false); // 버튼 클릭 여부
  const [citySelected, setCitySelected] = useState<number>(1); // 선택된 도시
  const [cityList, setCityList] = useRecoilState<City[]>(citiesState); // 지역 정보 관리
  const selectedCity = useRecoilValue<number>(citySelectedState);

  useEffect(() => {
    setCitySelected(selectedCity);
  }, [selectedCity]);

  // 드롭다운에서 도시 선택할 때 호출
  const selectCity = (city: string | TripListTitleType) => {
    const selectedCity = Number(city as TripListTitleType);
    const newCityList = cityList.map((city) => ({
      ...city,
      selected: city.id === selectedCity,
    }));
    setCityList(newCityList);

    setCitySelected(selectedCity); // 선택된 도시 업데이트
    setIsClicked(false);
    // console.log(selectedCity)
    // onCitySelected && onCitySelected(Number(selectedCity)); // 콜백 함수가 있는 경우, 새로운 도시 선택 시 호출하여 선택한 도시 전달
  };

  // 버튼 클릭될 때마다 호출
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  
  // 선택된 도시에 해당하는 TripCardList만 필터링
  const filteredList = useRecoilValue(
    getListSelector({
      titleType,
      area: selectedCity,
      barrier: "10000",
      page: 0,
      size: 10,
    })
  );
  // console.log(citySelected);

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

  return (
    <TripListContainer>
      <TripListTitle>
        {/* 서울 {typeText} 목록 */}
        {citySelected} {typeText} 목록
      </TripListTitle>
      <ButtonGroup>
        {/* 무장애 필터링 버튼 */}
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

        {/* 드롭다운 */}
        <Dropdown
          itemList={cityList.map((city: City) => city.name)}
          onItemSelected={selectCity}
        >
          <span>{citySelected}</span>
        </Dropdown>
      </ButtonGroup>
      {/* 관광지 목록 */}

      {filteredList && (
        <TripCardList titleType={titleType} tripList={filteredList} />
      )}
    </TripListContainer>
  );
}

export default TripList;
