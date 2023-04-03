import React, { useState, useRef } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  DropdownContainer,
  DropdownBtnText,
  DropdownBtnIcStyle,
  DropdownItemContainer,
  DropdownItem,
} from "./styles";
import { dropdownState } from "../../../recoil/ButtonState";
import { TripListTitleType } from "../../../types/tripListTypes";
import { citiesState, citySelectedState } from "../../../recoil/RegionState";

// 드롭다운이 받아야 할 props 정의
export interface DropdownProps {
  itemList: string[] | TripListTitleType[];
  children: React.ReactNode; //드롭다운 컴포넌트에 내부적으로 렌더링할 자식 요소
  onSelected?: (item: string | TripListTitleType) => void; // onSelected 함수를 props로 받음
}

export default function Dropdown({ itemList, onSelected }: DropdownProps) {
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null); // dropdownRef 생성
  const cities = useRecoilValue(citiesState);

  // 선택한 item -> recoil에 저장
  const setDropdownValue = useSetRecoilState(dropdownState);
  const [citySelected, setCitySelected] = useRecoilState(citySelectedState);

  // !! 저장된 도시 ID 값을 이용하여 선택한 도시 이름을 가져옴
  const cityName = cities.find((city) => city.id === citySelected)?.name || "";

  // 드롭다운을 클릭할 때 호출
  function handleClick() {
    setIsClicked(!isClicked);
  }

  // 드롭다운의 item 클릭했을 때 호출
  function handleItemClick(item: string | TripListTitleType) {
    setIsClicked(false);

    // 지역 선택 dropdown인 경우
    if (typeof item === "string") {
      const city = cities.find((city) => city.name === item);
      if (city) {
        setCitySelected(city.id);
        setDropdownValue((prev) => ({
          ...prev,
          selectedTripListTitle: item,
        }));
        if (onSelected) {
          onSelected(item); // 선택한 도시 정보를 부모 컴포넌트에 전달
        }
      } else {
        console.error(`city '${item}' not found`);
      }
    }
  }

  // 바깥쪽 영역을 클릭할 때 호출
  function handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsClicked(false);
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
    <DropdownContainer
      ref={dropdownRef}
      onClick={handleClick}
      isclicked={isClicked.toString()}
    >
      {/* 수정된 부분 */}
      <DropdownBtnText isclicked={isClicked.toString()}>
        <span>{cityName}</span>
      </DropdownBtnText>
      <DropdownBtnIcStyle isclicked={isClicked.toString()} />

      {isClicked && (
        <DropdownItemContainer>
          {itemList.map((item: string | TripListTitleType, index: number) => (
            <DropdownItem key={index} onClick={() => handleItemClick(item)}>
              {typeof item === "string" ? item : item.titleType}
            </DropdownItem>
          ))}
        </DropdownItemContainer>
      )}
    </DropdownContainer>
  );
}
