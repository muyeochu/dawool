import styled from "styled-components";
import { white, mainColor } from "../../styles/Colors";
import { ReactComponent as MapIc } from "../../assets/icon/mapIc.svg";

const CourseContainer = styled.div`
  grid-column: 1/4;
`;
const SideItem = styled.div`
  width: 27%;
  height: 92vh;
  float: left;
  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: auto;
`;
const MapItem = styled.div`
  width: 73%;
  height: 92vh;
  float: left;
`;
const SideHeader = styled.div`
  height: 8vh;
  background-color: ${mainColor};
  vertical-align: middle;
`;
const SideHeaderText = styled.h2`
  color: ${white};
  margin-left: 6%;
  font-size: 30px;
  padding-top: 1%;
`;
const MapIcStyle = styled(MapIc)`
  width: 25px;
  height: 25px;
  fill: ${white};
`;
export {
  CourseContainer,
  SideItem,
  SideHeader,
  MapItem,
  SideHeaderText,
  MapIcStyle,
};
