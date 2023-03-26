import {CourseContainer, SideItem, SideHeader, MapItem, SideHeaderText, MapIcStyle} from "../components/course/styles"
import KakaoMap from "../components/course/map";
import MyCourseSideBar from "../components/course/sideBar/index"
import {FolderState} from "../recoil/CourseFolderState"
import { useRecoilState } from "recoil";
import {GuideManStyle, GuideText} from "../components/course/map/styles"
import { modalState } from "../recoil/ModalState";

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
          <MyCourseSideBar/>
      </SideItem>
      <MapItem>
        {/* 폴더 클릭 시 받아오는 위, 경도 중 첫째값을 recoil에 담아서 kakaomap 태그의 위, 경도 값으로 주기 */}
        {folderState.isOpen?
        (mdState.isOpen?<></>:
        <KakaoMap lat="33.450701" lng="126.570667"></KakaoMap>)
        :
          <><GuideText>코스를 선택해주세요</GuideText>
          <GuideManStyle/></>
        }
      </MapItem>
    </CourseContainer>
  );
};

export default MyCoursePage;