import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledButton, ButtonText } from "./styles";
import { buttonState } from "./ButtonState";

interface ButtonProps {
  id: string;
  onClick: () => void;
  children: React.ReactNode;
  isClicked?: boolean;
}

export default function Q1Button({
  id,
  onClick,
  children,
  isClicked,
}: ButtonProps) {
  const [isClickedState, setIsClickedState] = useState(false);

  const [button, setButton] = useRecoilState(buttonState);

  useEffect(() => {
    setIsClickedState(isClicked || false);
  }, [isClicked]);

  useEffect(() => {
    setButton((prevState) => ({
      ...prevState,
      activeButtonId: isClickedState ? id : "",
    }));
  }, [id, isClickedState, setButton]);

  function handleClick() {
    onClick();
    setIsClickedState((prevState) => !prevState);
  }

  return (
    <StyledButton onClick={handleClick} isclicked={isClickedState}>
      <ButtonText isclicked={isClickedState}>{children}</ButtonText>
    </StyledButton>
  );
}
