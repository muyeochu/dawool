import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as SearchIc } from "../../../assets/icon/searchIc.svg";
import { ReactComponent as MicIc } from "../../../assets/icon/micIc.svg";
import { ReactComponent as DropDownIc } from "../../../assets/icon/ddIc.svg";

import { mainColor, blue, grey, white, black } from "../../../styles/Colors";

export const HeaderFont = styled.div`
  font-weight: 500;
`;

export const HeaderContainer = styled.div<{ headercolor: string }>`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;

  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  z-index: 99999;

  background-color: ${(props) => props.headercolor};
  transition: background-color 0.2s ease-out;
  box-shadow: ${(props) =>
    props.headercolor !== "transparent"
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
  font-size: 15px;
  line-height: 19px;
  color: black;
`;

export const LogoIcContainer = styled(LogoIc)`
  width: 51px;
  height: 43px;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchBarInput = styled.input<{ headercolor: string }>`
  width: 335px;
  height: 37px;
  border: 2px solid ${grey[300]};
  border-radius: 17px;
  padding-left: 15px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.headercolor === "transparent" &&
    css`
      border-color: #000000;
    `}
`;

export const SearchBarContainer = styled.div`
  position: relative;
  margin-left: 30px;
  margin-right: 12px;
`;

export const SearchIcContainer = styled(SearchIc)<{ headercolor: string }>`
  fill: ${grey[300]};
  width: 17.38px;
  height: 18px;

  position: absolute;
  right: 14px;
  top: 9px;

  ${(props) =>
    props.headercolor === "transparent" &&
    css`
      fill: #000000;
    `}

  &:hover {
    fill: ${blue[500]};
    cursor: pointer;
  }
`;

export const MicIcContainer = styled(MicIc)<{ headercolor: string }>`
  fill: ${(props) =>
    props.headercolor === "transparent" ? "#000000" : mainColor};
`;

export const NavStyle = styled(NavLink)`
  text-decoration: none;
  &:link {
    text-decoration: none;
  }

  &:visited {
    color: black;
    text-decoration: none;
  }

  &:hover {
    color: ${mainColor};
    transition: color 0.3s;
  }

  &.active {
    color: ${mainColor};
  }
`;

export const DropDownIcContainer = styled.div<{ ismenuopen: string }>`
  position: relative;
  margin-right: 15px;

  fill: ${(props) => (props.ismenuopen === "false" ? "black" : mainColor)};
  color: ${(props) => (props.ismenuopen === "false" ? "black" : mainColor)};

  &:hover {
    color: ${mainColor};
    fill: ${mainColor};
    transition: color 0.3s;
    cursor: pointer;
  }
`;

export const DropDownIcStyle = styled(DropDownIc)<{ ismenuopen: string }>`
  position: absolute;
  width: 14px;
  height: 20px;
  left: 55px;
  bottom: 0.5px;

  transition: transform 0.1s ease-in-out;

  transform: ${(props) =>
    props.ismenuopen === "false" ? "rotate(180deg)" : "none"};
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 90%;
  right: 400px;
  text-align: center;
  overflow: hidden;
`;

export const DropDownContent = styled.ul`
  list-style: none;
  background-color: ${white};
  width: 120px;
  padding: 8px 0 8px 0;
  border-radius: 4px;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);

  @keyframes dropdown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 0.5s ease;

  li {
    padding-top: 5px;
    padding-bottom: 5px;

    &:hover {
      background-color: ${blue[100]};
      cursor: pointer;
    }
  }
`;

export const PersonIcContainer = styled.div`
  width: 33px;
  height: 33px;

  &:hover {
    cursor: pointer;
  }
`;
