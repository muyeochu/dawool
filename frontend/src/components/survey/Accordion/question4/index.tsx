import React from "react";
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
  // 선택한 값을 selectedValue로 설정
  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

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
