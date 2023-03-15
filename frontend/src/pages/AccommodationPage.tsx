import useModal from "../components/utils/useModal";

const AccommodationPage = () => {
  const { openModal, closeModal } = useModal();

  const modalData = {
    title: "타이틀",
    content: "모달 내용",
    callback: () => {
      alert("삭제되었습니다!");
      closeModal();
      // 삭제 후 목록을 다시 불러오는 함수 작성
    },
  };

  return (
    <div>
      <button
        onClick={() => {
          openModal(modalData);
        }}
      >
        모달창 테스트
      </button>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
      <h1>숙박 목록 페이지입니다.</h1>
    </div>
  );
};

export default AccommodationPage;
