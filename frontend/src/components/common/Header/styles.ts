import styled from "styled-components";

import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as SearchIc } from "../../../assets/icon/searchIc.svg";
import { ReactComponent as MicIc } from "../../../assets/icon/micIc.svg";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: pink;
`;

export const LogoIcContainer = styled(LogoIc)`
  width: 51px;
  height: 43px;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchBarInput = styled.input`
  width: 335px;
  height: 37px;
  border: 2px solid #959595;
  border-radius: 17px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const SearchIcContainer = styled(SearchIc)`
  fill: #959595;
  width: 17.38px;
  height: 18px;

  position: absolute;
  right: 16px;
  top: 12px;

  &:hover {
    fill: #006083;
    cursor: pointer;
  }
`;

export const MicIcContainer = styled(MicIc)`
  position: absolute;
`;
