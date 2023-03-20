import styled from "styled-components";
import { white,mainColor } from "../styles/Colors";
import { ReactComponent as MapIc } from "../assets/icon/mapIc.svg";
import KakaoMap from "../components/course/map";
const CourseContainer=styled.div`
  grid-column: 1/4;
`
const SideItem = styled.div`
  width: 27%;
  height: 100vh;
  float: left;
  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.25);
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
    <MapItem>
      <KakaoMap lat="33.450701" lng="126.570667" ></KakaoMap>
    </MapItem>
    </CourseContainer>
  );
};

export default MyCoursePage;