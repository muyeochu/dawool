import { useRecoilState } from "recoil";
import {FolderState} from "../../../../../recoil/CourseFolderState"
import {ExitFolderContainer,ExitFolderButton,ArrowIc,DeleteIc,FolderContainer} from "./styles"
import { FolderYellowIc } from "../styles";
import { useState, useRef } from "react";
import useModal from "../../../../../components/utils/useModal";
import { modalState } from "../../../../../recoil/ModalState";
// import axios from "axios";


export const FolderInside=()=>{
    const { openModal, closeModal } = useModal();
    const [mdState, setModalState] = useRecoilState(modalState);
    const modalDataS = {
        type: "default",
        title: "코스 삭제",
        content: "이 코스를 삭제하면 코스에 저장된 관광지도 함께 삭제됩니다.",
        callback: () => {
        // const deleteNowFolder = async ()=>{
        //   await axios
        //   .delete(process.env.REACT_APP_API_BASE_URL+"/api/user/my-course/{courseId}")
        // }
          alert("삭제되었습니다!");
          closeModal();
          exitFolder();
          
          // 삭제 후 목록을 다시 불러오는 함수 작성
        //   openModal(modalDataS);
        },
      };
    const [folderState, setFolderState] = useRecoilState(FolderState);
    function exitFolder(){
        setFolderState({
            isOpen:false,
            opendFolder:"",
            courseId:1 //나중에contentid로 넣기
        });
    }
    function deleteNowFolder(e:any){
        //만들어놓은 alert창 띄우기
        // alert("임시")
        openModal(modalDataS);
        //그 뒤에 진자 삭제하겠다고 누르면 아래 코드 실행


        exitFolder();
    }
    return(<>
    <ExitFolderContainer >
        <ExitFolderButton onClick={exitFolder}><ArrowIc/>전체 코스 보기</ExitFolderButton>
    </ExitFolderContainer>
    <FolderContainer><FolderYellowIc/>{folderState.opendFolder} 
        {mdState.isOpen?<DeleteIc style={{zIndex:-1}}/>:
        <DeleteIc onClick={()=>{openModal(modalDataS)}}/>
    }
    </FolderContainer>
    <></>
    {/* 
    //옆에는 수정, 삭제 버튼
    //밑에는 파일들
    //메모 */}
    </>
    )
};