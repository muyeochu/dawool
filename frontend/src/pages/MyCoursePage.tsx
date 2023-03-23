import {CourseContainer, SideItem, SideHeader, MapItem, SideHeaderText, MapIcStyle} from "../components/course/styles"
import KakaoMap from "../components/course/map";
import MyCourseSideBar from "../components/course/sideBar/index"

const MyCoursePage = () => {
  return (
    <CourseContainer>
      <SideItem>
          <SideHeader>
            <SideHeaderText>
              <MapIcStyle /> 내 코스 관리
            </SideHeaderText>
          </SideHeader>
          <MyCourseSideBar/>
      </SideItem>
      <MapItem>
        <KakaoMap lat="33.450701" lng="126.570667" ></KakaoMap>
      </MapItem>
    </CourseContainer>
  );
};

export default MyCoursePage;