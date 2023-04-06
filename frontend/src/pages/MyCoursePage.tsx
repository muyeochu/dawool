import {
  CourseContainer,
  SideItem,
  SideHeader,
  MapItem,
  SideHeaderText,
  MapIcStyle,
} from "../components/course/styles";
import MyCourseSideBar from "../components/course/sideBar/index";
import { FolderState } from "../recoil/CourseFolderState";
import { useRecoilState } from "recoil";
import { GuideManStyle, GuideText } from "../components/course/map/styles";
import { modalState } from "../recoil/ModalState";
import Markers from "../components/course/map/markers";

const MyCoursePage = () => {
  const [folderState, setFolderState] = useRecoilState(FolderState);
  const [mdState, setModalState] = useRecoilState(modalState);

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
        {folderState.isOpen ? (
          mdState.isOpen ? (
            <></>
          ) : (
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
