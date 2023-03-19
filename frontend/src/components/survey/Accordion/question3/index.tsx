import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Slider } from "rsuite";
import { SliderContainer } from "./styles";

const ThirdQuestion = () => {
  return (
    <SliderContainer>
      <Slider
        max={5}
        min={1}
        step={1}
        defaultValue={1}
        graduated
        progress
        renderMark={(mark) => {
          if ([1, 2, 3, 4, 5].includes(mark)) {
            return <span>{mark} 시간</span>;
          }
          return null;
        }}
        handleTitle=""
      />
    </SliderContainer>
  );
};

export default ThirdQuestion;
