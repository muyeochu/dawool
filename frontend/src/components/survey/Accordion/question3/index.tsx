import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Slider } from "rsuite";
import { SliderContainer } from "./styles";
import { useRecoilState } from "recoil";
import { secondState } from "../../../../recoil/SurveyState";

const ThirdQuestion = () => {
  // secondState와 연결된 mark 상태 변수 만들기
  const [mark, setMark] = useRecoilState(secondState);
  console.log(mark)

  const renderMark = (mark: number) => {
    if ([1, 2, 3, 4, 5].includes(mark)) {
      return (
        <span
          onClick={() => {
            setMark(mark); // markState 업데이트
          }}
        >
          {mark} 시간
        </span>
      );
    }
    return null;
  };


  return (
    <SliderContainer>
      <Slider
        max={5}
        min={1}
        step={1}
        defaultValue={1}
        graduated
        progress
        renderMark={renderMark}
        handleTitle=""
      />
    </SliderContainer>
  );
};

export default ThirdQuestion;
