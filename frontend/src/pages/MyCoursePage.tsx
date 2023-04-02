import {
  CourseContainer,
  SideItem,
  SideHeader,
  MapItem,
  SideHeaderText,
  MapIcStyle,
} from "../components/course/styles";
import KakaoMap from "../components/course/map";
import MyCourseSideBar from "../components/course/sideBar/index";
import { FolderState } from "../recoil/CourseFolderState";
import { useRecoilState } from "recoil";
import { GuideManStyle, GuideText } from "../components/course/map/styles";
import { modalState } from "../recoil/ModalState";
import { userState } from "../recoil/UserState";
import { clickedState } from "../recoil/ClickedCourse";
import ClickedKakaoMap from "../components/course/map/ClickedMyCourseMap";
import Markers from "../components/course/map/markers";
const MyCoursePage = () => {
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const [mdState, setModalState] = useRecoilState(modalState);
  const [usState, setUsState] = useRecoilState(userState);
  const [clState, setClState] = useRecoilState(clickedState);
  let mapX = "";
  let mapY = "";
  function getXY() {
    let x = document.getElementById("클릭")?.getAttribute("mapX");
    // if(x)
    let y = document.getElementById("클릭")?.getAttribute("mapY");
    // console.log(mapXY)
  }
  getXY();
  // if(clState.isClicked){
  //   mapX =clState.mapX.toString();
  //   mapY = clState.mapY.toString();
  // }
  return (
    <CourseContainer>
      <SideItem>
        <SideHeader>
          <SideHeaderText>
            <MapIcStyle /> 내 코스 관리
          </SideHeaderText>
        </SideHeader>
        <MyCourseSideBar />
      </SideItem>
      <MapItem>
        {/* 폴더 클릭 시 받아오는 위, 경도 중 첫째값을 recoil에 담아서 kakaomap 태그의 위, 경도 값으로 주기 */}
        {folderState.isOpen ? (
          mdState.isOpen ? (
            <></>
          ) : (
            // 클릭 시 그 위치로 지도 옮기는 기능 설정하기
            <Markers></Markers>
          )
        ) : (
          <>
            <GuideText>코스를 선택해주세요</GuideText>
            <GuideManStyle />
          </>
        )}
      </MapItem>
    </CourseContainer>
  );
};

export default MyCoursePage;
