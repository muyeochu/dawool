import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledButton, ButtonText } from "./styles";

export default function SaveBtn() {
  return (
    <StyledButton>
      <ButtonText>저장</ButtonText>
    </StyledButton>
  );
}
