import React, { useState, useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Container,
  DropdownContainer,
  DropdownBtnText,
  DropdownBtnIcStyle,
  DropdownItemContainer,
  DropdownItem,
  CityDropdownContainer,
  DistrictDropdownContainer,
} from "./styles";
import { citiesState, districtState } from "../../../../../recoil/RegionState";
import { City, District } from "../../../../../types/regionTypes";
import { secondState } from "../../../../../recoil/SurveyState";

const RegionDropdown = () => {
  // 현재 선택된 광역시도와 시군구 저장
  const [isCityClicked, setIsCityClicked] = useState(false);
  const [isDistrictClicked, setIsDistrictClicked] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null); // dropdownRef 생성
  const cities = useRecoilValue<City[]>(citiesState);
  const districts = useRecoilValue<District[]>(districtState);
  const [selectedCity, setSelectedCity] = useState<City | undefined>(undefined); // 선택된 광역시 저장
  const [selectedDistrict, setSelectedDistrict] = useState<
    District | undefined
  >(undefined); // 선택된 시군구 저장
  const [second, setSecond] = useRecoilState<string>(secondState); // SurveyState의 secondState 가져오기

  console.log("광역시도 id=", selectedCity);
  console.log("시군구 id=", selectedDistrict);
  console.log("저장되는 값=", second);

  // 광역시도 드롭다운 클릭할 때 호출
  function handleCityClick() {
    setIsDistrictClicked(false);
    setIsCityClicked(!isCityClicked);
  }

  // 시군구 드롭다운을 클릭할 때 호출
  function handleDistrictClick() {
    setIsCityClicked(false);
    setIsDistrictClicked(!isDistrictClicked);
  }

  // 광역시 선택 시 호출
  function handleCitySelect(city: City) {
    setSelectedCity(city);
    setSelectedDistrict(undefined);
    setIsCityClicked(false);
  }

  // 시군구 선택 시 호출
  function handleDistrictSelect(district: District) {
    setSelectedDistrict(district);
    setSecond(`${selectedCity?.id}${district.id}`);
    setIsDistrictClicked(false);
  }

  return (
    <Container>
      {/* 광역시도 */}
      <CityDropdownContainer
        onClick={handleCityClick}
        isclicked={isCityClicked.toString()}
      >
        <DropdownBtnText isclicked={isCityClicked.toString()}>
          {selectedCity?.name ?? "광역시도 선택"}
          <DropdownBtnIcStyle isclicked={isCityClicked.toString()} />
        </DropdownBtnText>
        {isCityClicked && (
          <DropdownItemContainer>
            {cities.map((city) => (
              <DropdownItem key={city.id} onClick={() => handleCitySelect(city)}>
                {city.name}
              </DropdownItem>
            ))}
          </DropdownItemContainer>
        )}
      </CityDropdownContainer>

      {/* 시군구 */}
      {selectedCity && (
        <DistrictDropdownContainer
          onClick={handleDistrictClick}
          isclicked={isDistrictClicked.toString()}
        >
          <DropdownBtnText isclicked={isDistrictClicked.toString()}>
            {selectedDistrict?.name ?? "시군구 선택"}
            <DropdownBtnIcStyle isclicked={isDistrictClicked.toString()} />
          </DropdownBtnText>
          {selectedCity && isDistrictClicked && (
            <DropdownItemContainer>
              {districts
                .filter((district) => district.cityId === selectedCity.id)
                .map((district) => (
                  <DropdownItem
                    key={district.id}
                    onClick={() => handleDistrictSelect(district)}
                  >
                    {district.name}
                  </DropdownItem>
                ))}
            </DropdownItemContainer>
          )}
        </DistrictDropdownContainer>
      )}
    </Container>
  );
};

export default RegionDropdown;
