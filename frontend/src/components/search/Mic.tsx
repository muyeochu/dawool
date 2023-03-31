import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  MicContainer,
  SpeakFontStyle,
  GuideFontStyle,
  BtnStyle,
  SideFontStyle,
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
  const [isReset2, setIsRest2] = useState(false)

  useEffect(() => {
    SpeechRecognition.startListening();
  }, []);
  

  if (isReset) {
    SpeechRecognition.startListening();
    setIsReset(false);
  }

  const handleSearch = () => {
    navigate("/search", { state: transcript });
    closeModal();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>해당 브라우저는 음성 인식을 지원하지 않습니다.</span>;
  }

  setTimeout(() => {
    if (!listening && transcript.length > 0) {
      handleSearch();
    }
  }, 1000);

  console.log("입력단어?", transcript)

  return (
    <>
      <MicContainer>
        <SpeakFontStyle>
          <p>{transcript}</p>
        </SpeakFontStyle>
        <MicAnimation />

        <GuideFontStyle>
          {listening
            ? "말하는 중입니다..."
            : transcript.length === 0
            ? "다시 말해보세요"
            : "입력 완료"}
        </GuideFontStyle>

        {/* <GuideFontStyle>
          {listening
            ? "말하는 중입니다..."
            : transcript.length === 0
            ? "다시 말해보세요"
            : "검색하시겠습니까?"}
        </GuideFontStyle> */}

        {/* <BtnStyle onClick={handleSearch}>
          <p>검색하기</p>
        </BtnStyle> */}

        {!listening && transcript.length === 0 && <BtnStyle
          onClick={() => {
            resetTranscript();
            setIsReset(true);
          }}
        >
          <p>다시 말하기</p>
        </BtnStyle>}
      </MicContainer>
    </>
  );
};

export default Mic;
