import useModal from "../../components/utils/useModal";

import { ReactComponent as SurveyModalImg } from "../../assets/images/surveyModalImg.svg";

const ModalTest = () => {
  const { openModal, closeModal } = useModal();

  const modalDataS = {
    type: "default",
    title: "타이틀",
    content: "모달 내용",
    callback: () => {
      alert("삭제되었습니다!");
      closeModal();
      // 삭제 후 목록을 다시 불러오는 함수 작성
    },
  };

  const modalDataL = {
    type: "survey",
    content: <SurveyModalImg />,
    callback: () => {
      closeModal();
      // 삭제 후 목록을 다시 불러오는 함수 작성
    },
  };

  return (
    <div>
      <button
        onClick={() => {
          openModal(modalDataL);
        }}
      >
        큰 모달창 테스트
      </button>

      <button
        onClick={() => {
          openModal(modalDataS);
        }}
      >
        작은 모달창 테스트
      </button>
    </div>
  );
};

export default ModalTest;
