import { Folders } from "./folderList";
import { SideInHeader, SideInHeaderText } from "./styles";
import {FolderState} from "../../../recoil/CourseFolderState"
import { useRecoilState } from "recoil";
import { FolderInside } from "./folderList/openFolder";
const MyCourseSideBar=()=>{
    const [folderState, setFolderState] = useRecoilState(FolderState);
    return (
    <>
    {folderState.isOpen?
    <>
    {/* 폴더 클릭 시 파일 안으로 이동 */}
        {/* <FolderInside>
        </FolderInside>  */}
    </>
    :<>
        <SideInHeader>
            <SideInHeaderText>코스를 선택해주세요</SideInHeaderText>
        </SideInHeader>
        <Folders/>
    </>
    }      
    </>
    )
}
export default MyCourseSideBar;