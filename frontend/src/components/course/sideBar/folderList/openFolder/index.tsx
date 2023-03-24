import { useRecoilState } from "recoil";
import {FolderState} from "../../../../../recoil/CourseFolderState"
import {ExitFolderContainer,ExitFolderButton,ArrowIc,DeleteIc,FolderContainer} from "./styles"
import { FolderYellowIc } from "../styles";
import { useState, useRef } from "react";
// import axios from "axios";


export const FolderInside=()=>{
    // const ref = useRef<HTMLDivElement>(null);
    const [folderState, setFolderState] = useRecoilState(FolderState);
    function exitFolder(){
        setFolderState({
            isOpen:false,
            opendFolder:"",
            courseId:1 //나중에contentid로 넣기
        });
    }
    function deleteNowFolder(){
        //만들어놓은 alert창 띄우기
        alert("임시")
        //그 뒤에 진자 삭제하겠다고 누르면 아래 코드 실행
        // const deleteNowFolder = async ()=>{
        //   await axios
        //   .delete(process.env.REACT_APP_API_BASE_URL+"/api/user/my-course/{courseId}")
        // }

        exitFolder();
    }
    return(<>
    <ExitFolderContainer >
    <ExitFolderButton onClick={exitFolder}><ArrowIc/>전체 코스 보기</ExitFolderButton>
    </ExitFolderContainer>
    <FolderContainer><FolderYellowIc/>{folderState.opendFolder}<DeleteIc onClick={deleteNowFolder}/></FolderContainer>
    <></>
    {/* 
    //옆에는 수정, 삭제 버튼
    //밑에는 파일들
    //메모 */}
    </>
    )
};