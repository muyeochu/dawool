import React from "react";
import { useEffect, useState } from "react";
import { RadioButtonContainer } from "./styles";
import RadioButtonGroup from "../../../common/RadioButton/RadioButtonGroup";

const SecondQuestion = () => {
  const responses = [
    {
      label: "지역 선택하기",
      name: "button-types",
    },
    {
      label: "현재 위치정보 가져오기",
      name: "button-types",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<String>(
    responses[0].label
  );

  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    // console.log(selectedValue);
  }, [selectedValue]);

  return (
    <RadioButtonContainer>
      <RadioButtonGroup
        options={responses}
        onChange={radioGroupHandler}
      />
    </RadioButtonContainer>
  );
};

export default SecondQuestion;

