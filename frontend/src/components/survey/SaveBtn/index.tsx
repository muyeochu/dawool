import React from "react";
import { StyledButton, ButtonText } from "./styles";

interface SaveBtnProps {
  checkedIcCount: number;
}

const SaveBtn = ({ checkedIcCount }: SaveBtnProps) => {
  const isActive = checkedIcCount === 5;

  return (
    <StyledButton isActive={isActive}>
      <ButtonText>저장</ButtonText>
    </StyledButton>
  );
};

export default SaveBtn;
