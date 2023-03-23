// import { SideInHeader } from "../../styles";
import { useRecoilState } from "recoil";
import {FolderState} from "../../../../../recoil/CourseFolderState"

export const FolderInside=()=>{
    const [folderState, setFolderState] = useRecoilState(FolderState);

    return(
    <>
    {/* 뒤로가기 버튼 누르면 folder isOpen을 false로 변경하기
    폴더 내부 파일 목록 불러오고, 수정, 삭제구현 */}
    </>
    )
};