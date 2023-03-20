import React from "react";
import { useEffect, useState } from "react";
import { RadioButtonContainer } from "./styles";
import RadioButtonGroup from "../../../common/RadioButton/RadioButtonGroup";

const FourthQuestion = () => {
  const responses = [
    {
      label: "예",
      name: "button-types",
    },
    {
      label: "아니오",
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
    console.log(selectedValue);
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

export default FourthQuestion;
