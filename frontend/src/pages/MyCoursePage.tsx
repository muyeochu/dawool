import styled from "styled-components";
import { white,mainColor } from "../styles/Colors";
import { ReactComponent as MapIc } from "../assets/icon/mapIc.svg";
const CourseContainer=styled.div`
  grid-column: 1/4;
`
const SideItem = styled.div`
  width: 27%;
  height: 100vh;
  float: left;
`
const MapItem = styled.div`
  width: 73%;
  height:100vh;
  float: left;
`
const SideHeader = styled.h1`
  color:${white};
  background-color:${mainColor};
  text-align: center;
`

const MyCoursePage = () => {
  return (
    <CourseContainer>
    <SideItem>
        <SideHeader><MapIc/> 내 코스 관리</SideHeader>
    </SideItem>
    <MapItem></MapItem>
    </CourseContainer>
  );
};

export default MyCoursePage;