import { Folders } from "./folders";
import { SideInHeader, SideInHeaderText } from "./styles";

const MyCourseSideBar=()=>{
    return (
    <>
        <SideInHeader>
            <SideInHeaderText>&nbsp;&nbsp;&nbsp;코스를 선택해주세요</SideInHeaderText>
        </SideInHeader>
        <Folders/>
    </>
    )
}
export default MyCourseSideBar;