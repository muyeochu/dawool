import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  DropdownContainer,
  DropdownText,
  DropdownIcStyle,
  DropdownItemContainer,
  DropdownItem,
} from "./styles";
import { dropdownState } from "../../../recoil/ButtonState";
// import { cityState } from "../../../recoil/RegionState";
import { TripListTitleType } from "../../../types/tripListTypes";

// 드롭다운이 받아야 할 props 정의
interface DropdownProps {
  itemList: string[] | TripListTitleType[];
  onItemSelected: (item: string | TripListTitleType) => void; // 드롭다운에서 item을 선택했을 때 호출되는 함수
  children: React.ReactNode; //드롭다운 컴포넌트에 내부적으로 렌더링할 자식 요소
}

export default function Dropdown({ itemList, onItemSelected }: DropdownProps) {
  const [isClicked, setIsClicked] = useState(false);
  const dropdown = useRecoilValue(dropdownState);
  const [selectedItem, setSelectedItem] = useState<
    TripListTitleType | string | null
  >(null);

  // 드롭다운을 클릭할 때 호출
  function handleClick() {
    setIsClicked(!isClicked);
  }

  // 드롭다운의 item 클릭했을 때 호출
  function handleItemClick(item: string | TripListTitleType) {
    setIsClicked(false);
    setSelectedItem(typeof item === "string" ? item : item.titleType); // 선택한 item을 selectedItem state에 할당
    onItemSelected(item);
  }

  return (
    <DropdownContainer onClick={handleClick} isClicked={isClicked}>
      {selectedItem ? (
        <DropdownText isClicked={isClicked}>
          {typeof selectedItem === "string"
            ? selectedItem
            : selectedItem.titleType}
        </DropdownText>
      ) : (
        <DropdownText isClicked={isClicked}>
          {itemList.length > 0
            ? typeof itemList[0] === "string"
              ? itemList[0]
              : itemList[0].titleType
            : ""}
        </DropdownText>
      )}
      <DropdownIcStyle isClicked={isClicked} />

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
