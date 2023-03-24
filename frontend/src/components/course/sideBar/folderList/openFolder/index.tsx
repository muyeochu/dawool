import { useRecoilState } from "recoil";
import styled from "styled-components"
import {FolderState} from "../../../../../recoil/CourseFolderState"
import {ExitFolderContainer,ExitFolderButton,ArrowIc,DotIc,FolderContainer} from "./styles"
import { FolderYellowIc } from "../styles";
import { useState, useRef } from "react";
import { DropDownContainer,DropDownContent } from "../../../../common/Header/styles";
import { grey } from "../../../../../styles/Colors";

export const DotContainer = styled.div`
    z-index: 100;
    position: absolute;
  text-align: center;
  overflow: hidden;
  margin-left:20%;
`
export const DotContent = styled(DropDownContent)`
    border: 1px solid ${grey[300]};
`
export const FolderInside=()=>{
    const ref = useRef<HTMLDivElement>(null);
    const [folderState, setFolderState] = useRecoilState(FolderState);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function exitFolder(){
        setFolderState({
            isOpen:false,
            opendFolder:""
        });
    }
    function dotOpen(){
        setIsMenuOpen(!isMenuOpen);
    }
    return(<>
    <ExitFolderContainer >
    <ExitFolderButton onClick={exitFolder}><ArrowIc/>전체 코스 보기</ExitFolderButton>
    </ExitFolderContainer>
    <FolderContainer><FolderYellowIc/>{folderState.opendFolder}<DotIc onClick={dotOpen}/></FolderContainer>
    {isMenuOpen?(
                <DotContainer ref={ref}>
                  <DotContent>
                    <li style={{borderBottom:"1px solid #959595"}}>수정</li>
                    <li >삭제</li>
                  </DotContent>
                </DotContainer>
              ):<></>}
    <></>
    {/* 
    //옆에는 수정, 삭제 버튼
    //밑에는 파일들
    //메모 */}
    </>
    )
};