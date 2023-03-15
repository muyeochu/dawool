import useModal from "../../utils/useModal";

import {
  ModalDimmer,
  ModalContainer,
  ModalTitle,
  ModalContents,
  ModalFooter,
  ModalButton,
  ModalYesButton,
} from "./styles";

const Modal = () => {
  const { modalDataState, closeModal } = useModal();
  return (
    <>
      {modalDataState.isOpen && (
        <ModalDimmer>
          <ModalContainer>
            <ModalTitle>{modalDataState.title}</ModalTitle>
            <ModalContents>{modalDataState.content}</ModalContents>
            <ModalFooter>
              <ModalButton onClick={closeModal}>취소</ModalButton>
              <ModalYesButton onClick={modalDataState.callback}>
                삭제
              </ModalYesButton>
            </ModalFooter>
          </ModalContainer>
        </ModalDimmer>
      )}
    </>
  );
};

export default Modal;
