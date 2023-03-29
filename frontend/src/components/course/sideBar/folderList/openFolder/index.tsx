import { useRecoilState } from "recoil";
import {FolderState} from "../../../../../recoil/CourseFolderState"
import {ExitFolderContainer,ExitFolderButton,ArrowIc,DeleteIc,FolderContainer, MemoContainer, UpdateIc, CourseListContainer} from "./styles"
import { FolderYellowIc, MemoIc } from "../styles";
import { useState, useRef } from "react";
import useModal from "../../../../../components/utils/useModal";
import { modalState } from "../../../../../recoil/ModalState";
import { mockComponent } from "react-dom/test-utils";
import { CourseList } from "./courseList";
// import axios from "axios";


export const FolderInside=()=>{
    const { openModal, closeModal } = useModal();
    const [mdState, setModalState] = useRecoilState(modalState);
    const [memo, setMemo] = useState('');

    const modalDataS = {
        type: "default",
        title: "코스 삭제",
        content: "이 코스를 삭제하면 코스에 저장된 관광지도 함께 삭제됩니다.",
        callback: () => {
        // const deleteNowFolder = async ()=>{
        //   await axios
        //   .delete(process.env.REACT_APP_API_BASE_URL+"/api/course/{courseId}")
        // }
          alert("삭제되었습니다!");
          closeModal();
          exitFolder();
        },
      };
    const [folderState, setFolderState] = useRecoilState(FolderState);
    function exitFolder(){
        setFolderState({
            isOpen:false,
            opendFolder:"",
            courseId:"" //나중에contentid로 넣기
        });
    }

    function handleTextAreaChange(e:any) {
        setMemo(e.target.value);
      }
    return(<>
    <ExitFolderContainer>
        <ExitFolderButton onClick={exitFolder}><ArrowIc/>전체 코스 보기</ExitFolderButton>
    </ExitFolderContainer>
    <FolderContainer><FolderYellowIc/>{folderState.opendFolder} 
        {mdState.isOpen?
            <DeleteIc style={{zIndex:-1}}/>:
            <DeleteIc onClick={()=>{openModal(modalDataS)}}/>
        }
    </FolderContainer>
    <CourseListContainer/>
    <MemoContainer>
        <MemoIc/> 메모
        <UpdateIc />
        
        {/* 메모칸 */}

    </MemoContainer>
    {/* 
    //밑에는 파일들
    //메모 */}
    </>
    )
};


// box-sizing: border-box;

// /* Auto layout */

// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 16px 216px 16px 10px;
// gap: 10px;

// position: absolute;
// width: 350px;
// height: 77px;
// left: 20px;
// top: 658px;

// border: 1px solid #ACACAC;
// border-radius: 6px;