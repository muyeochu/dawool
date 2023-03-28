import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { RadioButtonContainer } from "./styles";
import RadioButtonGroup from "../../../common/RadioButton/RadioButtonGroup";
import { fourthState } from "../../../../recoil/SurveyState";

const FourthQuestion = () => {
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

  const [selectedValue, setSelectedValue] = useRecoilState(fourthState);

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
        value={selectedValue}
        onChange={radioGroupHandler}
      />
    </RadioButtonContainer>
  );
};

export default FourthQuestion;
