import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { RadioButtonContainer } from "./styles";
import RadioButtonGroup from "../../../common/RadioButton/RadioButtonGroup";
import { fourthState } from "../../../../recoil/SurveyState";

const FourthQuestion = () => {
  // radio button의 선택지
  const responses = [
    {
      label: "예",
      name: "button-types",
      value: "1",
    },
    {
      label: "아니오",
      name: "button-types",
      value: "2",
    },
  ];

  // 현재 선택된 radio button value
  const [selectedValue, setSelectedValue] = useRecoilState(fourthState);
  const [isOpen, setIsOpen] = useState(false); // accordion이 열린 상태를 저장하는 state
  // 선택한 값을 selectedValue로 설정
  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  // selectedValue가 변경될 때마다 실행
  useEffect(() => {
    if (isOpen) {
      // accordion이 열린 경우에만 실행
      const radioGroup = document.getElementsByName("button-types");
      for (let i = 0; i < radioGroup.length; i++) {
        const radio = radioGroup[i] as HTMLInputElement;
        if (radio.value === selectedValue) {
          radio.checked = true; // 선택한 값에 해당하는 라디오 버튼을 체크한 상태로 변경
          break;
        }
      }
    }
    console.log(selectedValue)
  }, [isOpen, selectedValue]);

  return (
    <RadioButtonContainer>
      <RadioButtonGroup
        options={responses}
        value={selectedValue}
        onChange={radioGroupHandler}
      />
    </RadioButtonContainer>
  );
};

export default FourthQuestion;
