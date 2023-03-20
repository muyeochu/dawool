import React, {useState, useEffect} from "react";
import { useRecoilState } from "recoil";
import {DropdownContanier, DropdownText, DropdownIcon, Dropdown } from './styles';
import { citiesState,districtsState } from '../../../../../recoil/RegionState';

import { ReactComponent as DropdownkIc } from "../../../../../assets/icon/dropdownIc.svg";

export default function DropDown() {
  return (
    <div>
      <DropdownContanier>
      <DropdownText>
        광역시도
      </DropdownText>
        <DropdownkIc />
    </DropdownContanier>

    <DropdownContanier>
      <DropdownText>
        시군구
      </DropdownText>
        <DropdownkIc />
    </DropdownContanier>
    </div>
    
  )
}


