import React, { useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Container,
  DropdownBtnText,
  DropdownBtnIcStyle,
  DropdownItemContainer,
  DropdownItem,
  CityDropdownContainer,
  DistrictDropdownContainer,
} from "./styles";
import { citiesState, districtState } from "../../../../../recoil/RegionState";
import { City, District } from "../../../../../types/regionTypes";
import {
  secondState,
  selectedCityState,
  selectedDistrictState,
} from "../../../../../recoil/SurveyState";

interface Props {
  isCityClicked: boolean;
  setIsCityClicked: (isClicked: boolean) => void;
  isDistrictClicked: boolean;
  setIsDistrictClicked: (isClicked: boolean) => void;
}

const RegionDropdown = ({
  isCityClicked,
  setIsCityClicked,
  isDistrictClicked,
  setIsDistrictClicked,
}: Props) => {

  // ref 생성
  const cityDropdownRef = useRef<HTMLButtonElement>(null);
  const districtDropdownRef = useRef<HTMLButtonElement>(null);

  const cities = useRecoilValue<City[]>(citiesState);
  const districts = useRecoilValue<District[]>(districtState);
  const [selectedCity, setSelectedCity] = useRecoilState<City | undefined>(
    selectedCityState
  ); // 선택된 광역시 저장
  const [selectedDistrict, setSelectedDistrict] = useRecoilState<
    District | undefined
  >(selectedDistrictState); // 선택된 시군구 저장
  const [second, setSecond] = useRecoilState<string>(secondState); // SurveyState의 secondState 가져오기

  console.log("저장되는 값=", second);

  // 광역시도 드롭다운 클릭할 때 호출
  function handleCityClick() {
    setIsDistrictClicked(false);
    setIsCityClicked(!isCityClicked);
  }

  // 광역시 선택 시 호출
  function handleCitySelect(city: City) {
    setSecond("");
    setSelectedCity(city);
    setSelectedDistrict(undefined);
    setIsCityClicked(false);
  }

  // 시군구 드롭다운을 클릭할 때 호출
  function handleDistrictClick() {
    setIsCityClicked(false);
    setIsDistrictClicked(!isDistrictClicked);
  }

  // 시군구 선택 시 호출
  function handleDistrictSelect(district: District) {
    setSelectedDistrict(district);
    setSecond(`${selectedCity?.id}${district.id}`);
    setIsDistrictClicked(false);
  }

  // 바깥쪽 영역을 클릭할 때 호출
  function handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      cityDropdownRef.current &&
      !cityDropdownRef.current.contains(target) &&
      districtDropdownRef.current &&
      !districtDropdownRef.current.contains(target)
    ) {
      setIsCityClicked(false);
      setIsDistrictClicked(false);
    }
  }

  React.useEffect(() => {
    // 바깥쪽 영역 클릭 시 드롭다운 닫기
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Container>
      {/* 광역시도 */}
      <CityDropdownContainer
        onClick={handleCityClick}
        ref={cityDropdownRef}
        isclicked={isCityClicked.toString()}
      >
        <DropdownBtnText isclicked={isCityClicked.toString()}>
          {selectedCity?.name ?? "광역시도 선택"}
          <DropdownBtnIcStyle isclicked={isCityClicked.toString()} />
        </DropdownBtnText>
        {isCityClicked && (
          <DropdownItemContainer>
            {cities.map((city) => (
              <DropdownItem
                key={city.id}
                onClick={() => handleCitySelect(city)}
              >
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
          ref={districtDropdownRef}
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
