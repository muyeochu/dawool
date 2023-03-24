import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Container,
  Dropdown,
  DropdownContainer,
  AlertMessage,
  DropdownButton,
} from "./styles";
import { cityState, districtState } from "../../../../../recoil/RegionState";
import { City, District } from "../../../../../types/regionTypes";

import { ReactComponent as DropdownkIc } from "../../../../../assets/icon/dropdownIc.svg";

// 현재 선택된 광역시도와 시군구 저장
const RegionDropdown = () => {
  const [selectedCity, setSelectedCity] = useState<City | undefined>();
  const [selectedDistrict, setSelectedDistrict] = useState<
    District | undefined
  >();

  // 드롭다운 옵션 목록 열림 여부 상태값
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 광역시도, 시군구 상태값 가져오기
  const cities = useRecoilValue(cityState);
  const districts = useRecoilValue(districtState);

  // 광역시도가 변경될 때 호출, 선택된 광역시도의 id를 찾아 setSelectedCity 함수를 호출하여 상태값을 업데이트
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = parseInt(event.target.value);
    const city = cities.find((city) => city.id === selectedCityId);
    setSelectedCity(city);
    setSelectedDistrict(undefined); // 시군구 선택값 초기화
  };

  // 시군구가 변경될 때 호출, 선택된 시군구의 id를 찾아 setSelectedDistrict 함수를 호출하여 상태값을 업데이트
  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDistrictId = parseInt(event.target.value);
    const district = districts.find(
      (district) => district.id === selectedDistrictId
    );
    setSelectedDistrict(district);
  };

  // 선택된 광역시도에 해당하는 시군구들만 필터링
  const filteredDistricts = districts.filter(
    (district) => selectedCity && district.cityId === selectedCity.id
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Container>
      <DropdownContainer>
        <Dropdown value={selectedCity?.id} onChange={handleCityChange}>
          <option value="">광역시도</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </Dropdown>
        {selectedCity && (
          <Dropdown
            value={selectedDistrict?.id}
            onChange={handleDistrictChange}
          >
            <option value="">시군구</option>
            {filteredDistricts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </Dropdown>
        )}
      </DropdownContainer>
      {!selectedDistrict && <AlertMessage>시군구를 선택해주세요.</AlertMessage>}
    </Container>
  );
};

export default RegionDropdown;

// <div>
//   <DropdownContanier>
//   <DropdownText>
//     광역시도
//   </DropdownText>
//     <DropdownkIc />
// </DropdownContanier>

// <DropdownContanier>
//   <DropdownText>
//     시군구
//   </DropdownText>
//     <DropdownkIc />
// </DropdownContanier>
// </div>
