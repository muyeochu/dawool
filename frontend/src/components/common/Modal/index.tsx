import { useNavigate } from "react-router-dom";
import useModal from "../../utils/useModal";
import { useEffect } from "react";
import { getSpeech } from "../../utils/getSpeech";

import {
  ModalDimmer,
  ModalContainer,
  ModalTitle,
  ModalContents,
  ModalFooter,
  ModalBtn,
  ModalYesBtn,
  ModalLargeContainer,
  CloseBtnStyle,
  ModalLargeContents,
  MainFontStyle,
  BtnStyle,
  BtnFontStyle,
  SideFontStyle,
  ModalMicContainer,
  VolumeIcStyle,
} from "./styles";

const Modal = () => {
  const navigate = useNavigate();
  const { modalDataState, closeModal } = useModal();

  const goSurvey = () => {
    navigate("/survey");
  };

  // 식당페이지로 넘김 (임시)
  const goTourSpot = () => {
    navigate("/tourSpot");
  };

  const synth = window.speechSynthesis;

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleButton = (newValue: string) => {
    getSpeech(newValue);
  };

  const handleValue = (
    tempKey: string | undefined,
    tempValue: string | JSX.Element
  ) => {
    const newValue = tempKey && tempValue ? tempKey + tempValue : "";
    handleButton(newValue);
  };

  const handleMute = () => {
    synth.cancel();
    closeModal();
  };

  return (
    <>
      {modalDataState.isOpen && modalDataState.type === "default" && (
        <ModalDimmer>
          <ModalContainer>
            <ModalTitle>{modalDataState.title}</ModalTitle>
            <ModalContents>{modalDataState.content}</ModalContents>
            <ModalFooter>
              <ModalBtn onClick={closeModal}>취소</ModalBtn>
              <ModalYesBtn onClick={modalDataState.callback}>삭제</ModalYesBtn>
            </ModalFooter>
          </ModalContainer>
        </ModalDimmer>
      )}

      {modalDataState.isOpen && modalDataState.type === "barrier" && (
        <ModalDimmer>
          <ModalContainer className="barrier">
            <ModalTitle>
              {modalDataState.title}
              <VolumeIcStyle
                onClick={() => {
                  handleValue(modalDataState.title, modalDataState.content);
                }}
              />
            </ModalTitle>
            <ModalContents className="barrier">
              {modalDataState.content}
            </ModalContents>
            <ModalFooter className="barrier">
              <ModalBtn
                onClick={() => {
                  handleMute();
                }}
              >
                닫기
              </ModalBtn>
            </ModalFooter>
          </ModalContainer>
        </ModalDimmer>
      )}

      {modalDataState.isOpen && modalDataState.type === "survey" && (
        <ModalDimmer>
          <ModalLargeContainer>
            <CloseBtnStyle onClick={closeModal} />
            <ModalLargeContents>{modalDataState.content}</ModalLargeContents>
            <MainFontStyle>
              설문에 참여하고 취향에 맞는 관광지를 추천받으세요!
            </MainFontStyle>
            <BtnStyle>
              <BtnFontStyle
                onClick={() => {
                  goSurvey();
                  closeModal();
                }}
              >
                추천받기
              </BtnFontStyle>
            </BtnStyle>
            <SideFontStyle
              onClick={() => {
                goTourSpot();
                closeModal();
              }}
            >
              둘러볼래요
            </SideFontStyle>
          </ModalLargeContainer>
        </ModalDimmer>
      )}

      {modalDataState.isOpen && modalDataState.type === "mic" && (
        <ModalDimmer>
          <ModalMicContainer>
            <CloseBtnStyle className="mic" onClick={closeModal} />
            <ModalLargeContents>{modalDataState.content}</ModalLargeContents>
          </ModalMicContainer>
        </ModalDimmer>
      )}
    </>
  );
};

export default Modal;
