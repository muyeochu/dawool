import { useRecoilState } from "recoil";
import { FolderState } from "../../../../../recoil/CourseFolderState";
import {
  ExitFolderContainer,
  ExitFolderButton,
  ArrowIc,
  FolderContainer,
  CourseListContainer,
  FolderNameContainer,
} from "./styles";
import DetailBtn from "../../../../common/DetailBtn";
import { FolderYellowIc } from "../styles";

import useModal from "../../../../../components/utils/useModal";
import { modalState } from "../../../../../recoil/ModalState";

import { customAxios2 } from "../../../../../recoil/customAxios";

export const FolderInside = () => {
  const { openModal, closeModal } = useModal();
  const [mdState, setModalState] = useRecoilState(modalState);
  const [folderState, setFolderState] = useRecoilState(FolderState);

  const deleteCourseFolderData = () =>
    customAxios2
      .delete(`user/my-course/${folderState.courseId}`)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

  async function myFunction() {
    try {
      let nowURL = new URL(window.location.href).href.includes("my");
      if (!nowURL) return;
      await deleteCourseFolderData();
    } catch (err) {
      throw err;
    }
  }

  const modalDataS = {
    type: "default",
    title: "코스 삭제",
    content: "이 코스를 삭제하면 코스에 저장된 관광지도 함께 삭제됩니다.",
    callback: () => {
      myFunction().then();
      alert("삭제되었습니다!");
      closeModal();
      exitFolder();
    },
  };
  function exitFolder() {
    setFolderState({
      isOpen: false,
      opendFolder: "",
      courseId: "",
    });
  }

  return (
    <>
      <ExitFolderContainer>
        <ExitFolderButton onClick={exitFolder}>
          <ArrowIc />
          전체 코스 보기
        </ExitFolderButton>
      </ExitFolderContainer>
      <FolderContainer>
        <FolderNameContainer>
          <FolderYellowIc />
          {folderState.opendFolder}
        </FolderNameContainer>
        {mdState.isOpen ? (
          <DetailBtn type={"delete"} text={"삭제"}></DetailBtn>
        ) : (
          <DetailBtn
            type={"delete"}
            text={"삭제"}
            onClick={() => {
              openModal(modalDataS);
            }}
          ></DetailBtn>
        )}
      </FolderContainer>
      <CourseListContainer />
    </>
  );
};
