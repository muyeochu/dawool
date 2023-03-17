import React, { useState, useCallback, useEffect } from "react";
import Q1Button from "../../Button";
import { ButtonListContainer } from "./styles";
import { buttonState } from "../../Button/ButtonState";

const FirstQuestion = () => {
  // clickedButtons : 각 버튼에 대한 ID 값으로 구성
  const [clickedButtons, setClickedButtons] = useState<string[]>([]);
  // const [isClickedList, setIsClickedList] = useState<boolean[]>([]);
  // console.log(clickedButtons);
  // useEffect(() => {
  //   setIsClickedList()
  // }, [clickedButtons]);

  const handleButtonClick = useCallback(
    (id: string) => {
      switch (id) {
        case "btn1":
          setClickedButtons(clickedButtons.includes("btn1") ? [] : [id]);
          break;
        default:
          setClickedButtons((prev) => {
            const newClickedButtons = prev.filter(
              (buttonId) => buttonId !== "btn1"
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
    { id: "btn1", label: "해당없음" },
    { id: "btn2", label: "장애인" },
    { id: "btn3", label: "노인" },
    { id: "btn4", label: "영유아" },
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
