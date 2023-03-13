import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as SearchIc } from "../../../assets/icon/searchIc.svg";
import { ReactComponent as MicIc } from "../../../assets/icon/micIc.svg";
import { ReactComponent as PersonIc } from "../../../assets/icon/personIc.svg";

export const HeaderFont = styled.div`
  font-weight: 500;
`;

export const HeaderContainer = styled.div<{ headerColor: string }>`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;

  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  z-index: 99999;

  background-color: ${(props) => props.headerColor};
  transition: background-color 0.2s ease-out;
  box-shadow: ${(props) =>
    props.headerColor !== "transparent"
      ? "0 2px 8px rgba(0, 0, 0, 0.1)"
      : "none"};
`;

export const InvisibleBox = styled.div`
  height: 60px;
  visibility: hidden;
`;

export const GridItems = styled.div`
  grid-column: 2/3;
  align-self: center;
`;

export const ElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoToMic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px 4px;
  padding: 10px 0px 4px;
`;

export const ListToMy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
  margin-left: 30px;
  margin-right: 12px;
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

export const NavStyle = styled(NavLink)`
  &:link {
    text-decoration: none;
  }

  &:visited {
    color: black;
    text-decoration: none;
  }

  &:hover {
    color: #00769b;
    transition: color 0.3s;
  }

  &.active {
    color: #00769b;
  }
`;

export const PersonIcContainer = styled(PersonIc)`
  width: 33px;
  height: 33px;
`;
