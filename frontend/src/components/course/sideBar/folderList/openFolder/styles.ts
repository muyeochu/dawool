import styled from "styled-components"
import {ReactComponent as Arrow} from "../../../../../assets/icon/arrowIc.svg"
// import {ReactComponent as Dot} from "../../../../../assets/icon/menuDotIc.svg"
import {ReactComponent as DeleteFolder} from "../../../../../assets/icon/deleteIc.svg"
import { grey } from "../../../../../styles/Colors";

export const ExitFolderContainer = styled.div`
flex-direction: row;
align-items: center;
margin: 5px;
text-align: center;
`
export const ExitFolderButton = styled.button`
box-sizing: border-box;
/* Auto layout */
display: inline-block;
flex-direction: row;
align-items: center;
padding: 14px 34px;
gap: 10px;
/* position: absolute; */
border: 1px solid #959595;
border-radius: 20px;
background-color: white;
`
export const ArrowIc = styled(Arrow)`
display: inline-block;
flex-direction: row;
align-items: center;
padding:5px 0px 0px 0px;
`
// export const DotIc = styled(Dot)`
//     margin-left: 60%;
//     cursor: pointer;
// `
export const FolderContainer = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-bottom:1px solid ${grey[300]};
`
export const DeleteIc = styled(DeleteFolder)`
    z-index: 100;
    position: absolute;
  text-align: center;
  overflow: hidden;
  margin-left:20%;
  cursor: pointer;
`

// export const DotContainer = styled.div`
//     z-index: 100;
//     position: absolute;
//   text-align: center;
//   overflow: hidden;
//   margin-left:20%;
// `
// export const DotContent = styled(DropDownContent)`
//     border: 1px solid ${grey[300]};
// `