import {ReactComponent as FolderGrey} from "../../../../assets/icon/folderGrey.svg";
import {ReactComponent as FolderYellow} from "../../../../assets/icon/folderYellow.svg";
import styled from "styled-components";
import { MenuFont } from "../../../personal/styles";
import { grey, black } from "../../../../styles/Colors";

export const FolderYellowIc = styled(FolderYellow)`
    margin-left: 5%;
    margin-right: 5%;
    display: inline-block;
`

export const FolderHeaderContainer = styled.div`
border-bottom: 1px solid ${grey[300]}; 
flex-direction: row;
align-items: center;
padding:0px 0px 10px 10px;
`
export const FolderGreyIc = styled(FolderGrey)`
    margin-left: 5%;
    
`
// export const FolderHeaderFont = styled(MenuFont)`
//     margin-left: 3%;
//     color:${grey[300]}
// `

export const InputForderName = styled.input.attrs({
    placeholder:"새 코스명을 입력해주세요.",
    
})`
    display:inline-block;
    margin-left:3%;
    border:none;
`
export const FolderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    color: ${grey[300]};

    border-bottom:1px solid ${grey[300]};
    cursor: pointer; //생성된 폴더 목록 클릭 가능하게 표시.(마우스 커서 변환)
    &:hover{
        color:${black}
    }
`
