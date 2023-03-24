import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { DropdownContainer, DropdownText, DropdownIcStyle } from "./styles";
import { dropdownState } from "../../../recoil/ButtonState";
import { cityState } from "../../../recoil/RegionState";
import { TripListTitleType } from "../../../types/tripListTypes";

interface DropdownProps {
  data: string[] | TripListTitleType[];
  onClick: () => void;
  children: React.ReactNode;
}

export default function Dropdown({ data, onClick }: DropdownProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [dropdown, setDropdown] = useRecoilState(dropdownState);

  function handleClick() {
    setIsClicked(!isClicked);
    onClick();
  }

  function handleItemClick(item: string | TripListTitleType) {
    setDropdown((prevState) => ({ ...prevState, isClicked: false }));
    console.log(item);
    // Handle item click
  }

  return (
    <DropdownContainer onClick={handleClick} isClicked={isClicked}>
      {data.map((item: string | TripListTitleType, index: number) => (
        <DropdownText
          key={index}
          isClicked={isClicked}
          onClick={() => handleItemClick(item)}
        >
          {typeof item === "string" ? item : <span>{item.titleType}</span>}
        </DropdownText>
      ))}
      <DropdownIcStyle isClicked={isClicked} />
    </DropdownContainer>
  );
}
