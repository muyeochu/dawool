import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  MicContainer,
  SpeakFontStyle,
  GuideFontStyle,
  BtnStyle,
} from "./styles";

import MicAnimation from "../common/Mic";

import useModal from "../utils/useModal";

const Mic = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    SpeechRecognition.startListening();
  }, []);

  if (isReset) {
    SpeechRecognition.startListening();
    setIsReset(false);
  }

  const handleSearch = () => {
    navigate("/search", { state: transcript });
    window.location.reload();
    closeModal();
  };

  setTimeout(() => {
    if (!listening && transcript.length > 0) {
      handleSearch();
    }
  }, 1000);

  return (
    <>
      <MicContainer>
        <SpeakFontStyle>
          <p>{transcript}</p>
        </SpeakFontStyle>
        <MicAnimation />

        {browserSupportsSpeechRecognition && (
          <GuideFontStyle>
            {listening
              ? "말하는 중입니다..."
              : transcript.length === 0
              ? "다시 말해보세요"
              : "입력 완료"}
          </GuideFontStyle>
        )}

        {!browserSupportsSpeechRecognition && (
          <GuideFontStyle>
            해당 브라우저는 음성 인식을 지원하지 않습니다.
          </GuideFontStyle>
        )}

        {!listening && transcript.length === 0 && (
          <BtnStyle
            onClick={() => {
              resetTranscript();
              setIsReset(true);
            }}
          >
            <p>다시 말하기</p>
          </BtnStyle>
        )}
      </MicContainer>
    </>
  );
};

export default Mic;
