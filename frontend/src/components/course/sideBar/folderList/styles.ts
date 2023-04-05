import { ReactComponent as FolderGrey } from "../../../../assets/icon/folderGrey.svg";
import { ReactComponent as FolderYellow } from "../../../../assets/icon/folderYellow.svg";
import { ReactComponent as Memo } from "../../../../assets/icon/memoIc.svg";
import styled from "styled-components";
import { MenuFont } from "../../../personal/styles";
import { grey, black, mainColor, blue } from "../../../../styles/Colors";

export const FolderYellowIc = styled(FolderYellow)`
  margin-left: 5%;
  margin-right: 5%;
  display: inline-block;
`;
export const ModalFolderYellowIc = styled(FolderYellow)`
  /* margin-left: 5%; */
  margin-right: 5%;
  display: inline-block;
`;
export const FolderHeaderContainer = styled.div`
  border-bottom: 1px solid ${grey[300]};
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 10px 10px;
`;

export const FolderHeaderContainerModal = styled.div`
  /* border-bottom: 1px solid ${grey[300]}; */
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 20px 0px;
  width: 363px;
  justify-content: space-between;
`;
export const FolderGreyIc = styled(FolderGrey)`
  margin-left: 3.1%;
  width: 30px;
  height: 24px;
`;
export const ModalFolderGreyIc = styled(FolderGrey)`
  /* margin-left: 4.5%; */
  width: 30px;
  height: 24px;
`;
// export const FolderHeaderFont = styled(MenuFont)`
//     margin-left: 3%;
//     color:${grey[300]}
// `

export const InputFolderName = styled.input.attrs({
  placeholder: " 새 코스명을 입력해주세요.",
  maxLength: 20,
})`
  display: inline-block;
  margin-left: 3%;
  border: 3px solid rgb(149, 149, 149);
  border-radius: 5px;
  width: 65%;
`;

export const InputFolderNameModal = styled.input.attrs({
  placeholder: "새 코스명을 입력해주세요.",
})`
  display: inline-block;
  margin-left: 3%;
  border: 3px solid rgb(149, 149, 149);
  border-radius: 5px;
  width: 70%;
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  padding-left: 5px;
  gap: 10px;
  color: ${black};
  /* border-bottom: 1px solid ${grey[300]}; */
  cursor: pointer; //생성된 폴더 목록 클릭 가능하게 표시.(마우스 커서 변환)
  &:hover {
    background-color: ${blue[100]};
  }
`;
export const FolderContainerWrapper = styled.div`
  ${FolderContainer}
`;

export const MemoIc = styled(Memo)`
  margin-left: 5%;
  margin-right: 5%;
  display: inline-block;
`;
