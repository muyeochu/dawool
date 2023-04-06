import React, { useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { Slider } from "rsuite";
import { SliderContainer } from "./styles";
import { useRecoilState } from "recoil";
import { thirdState } from "../../../../recoil/SurveyState";

interface ThirdQuestionProps {
  isOpen: boolean;
}

const ThirdQuestion: React.FC<ThirdQuestionProps> = ({ isOpen }) => {
  const [mark, setMark] = useRecoilState(thirdState);

  useEffect(() => {
    if (!isOpen) {
      setMark("");
    }
  }, [isOpen]);

  const handleSliderChange = (value: number) => {
    setMark(value.toString());
  };

  const renderMark = (mark: number) => {
    if ([1, 2, 3, 4, 5].includes(mark)) {
      return (
        <span
          onClick={() => {
            setMark(mark.toString());
          }}
        >
          {mark}시간
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
        tooltip={false}
        handleTitle=""
        progress
        renderMark={renderMark}
        value={mark ? parseInt(mark) : undefined}
        onChange={handleSliderChange}
      />
    </SliderContainer>
  );
};

export default ThirdQuestion;
