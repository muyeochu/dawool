import React, { useState, useCallback } from "react";
import Q1Button from "./Button";
import { ButtonListContainer } from "./styles";
import { useRecoilState } from "recoil";
import { firstState } from "../../../../recoil/SurveyState";

const FirstQuestion = () => {
  // surveyState와 그 값을 가져와서 클릭 이벤트가 발생할 때마다 클릭한 버튼의 id 값을 surveyState에 저장
  const [clickedButtons, setClickedButtons] = useRecoilState(firstState);

  // console.log(clickedButtons)

  const handleButtonClick = useCallback(
    (id: number) => {
      switch (id) {
        case 1:
          setClickedButtons(clickedButtons.includes(1) ? [] : [id]);
          break;
        default:
          setClickedButtons((prev) => {
            const newClickedButtons = prev.filter(
              (buttonId) => buttonId !== 1
            );
            if (newClickedButtons.includes(id)) {
              return newClickedButtons.filter((buttonId) => buttonId !== id);
            } else {
              return [...newClickedButtons, id];
            }
          });
          break;
      }
    },
    [clickedButtons]
  );

  const buttons = [
    { id: 1, label: "해당없음" },
    { id: 2, label: "지체장애인" },
    { id: 3, label: "시각장애인" },
    { id: 4, label: "청각장애인" },
    { id: 5, label: "노인" },
    { id: 6, label: "영유아" },
  ];

  return (
    <ButtonListContainer>
      {buttons.map(({ id, label }) => (
        <Q1Button
          key={id}
          id={id}
          onClick={() => handleButtonClick(id)}
          isClicked={clickedButtons.includes(id)}
        >
          {label}
        </Q1Button>
      ))}
    </ButtonListContainer>
  );
};

export default FirstQuestion;
