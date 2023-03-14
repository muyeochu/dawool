import React from "react";
import { StyledButton, ButtonText, ButtonImage } from "./styles";

// children -> 하나의 자식 노드만 전달
interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  imageSrc?: string;
}

export default function Button({ onClick, disabled, children, imageSrc }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {imageSrc && <ButtonImage src={imageSrc} />}
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
}
