import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledButton, ButtonText, ButtonIcon } from "./styles";
import { buttonState } from "../../../recoil/ButtonState";

// children -> 하나의 자식 노드만 전달
interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  imageSrc?: string;
}

export default function Button({ children, imageSrc }: ButtonProps) {
  // 'useState' hook -> 클릭여부 상태값 관리 (기본값 'false')
  const [isClicked, setIsClicked] = useState(false);

  // 'useRecoilState' hook -> Recoil의 'buttonState' 값을 가져와 버튼 상태에 대한 정보 유지
  const [button, setButton] = useRecoilState(buttonState);

  // 'useEffect' hook -> 'clicked' 값이 변경될 때마다 Recoil의 `buttonState` update
  // 'clicked'값이 'true'이면 Recoil 상태값 'buttonState'의 'clicked' 프로퍼티 'true'로 설정
  useEffect(() => {
    setButton((prevState) => ({ ...prevState, isClicked }));
  }, [isClicked, setButton]);

  // 클릭 이벤트가 발생-> handleClick 함수가 호출, clicked 상태값이 반전
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <StyledButton onClick={handleClick} isClicked={isClicked}>
      <ButtonIcon src={imageSrc} isClicked={isClicked} />
      <ButtonText isClicked={isClicked}>{children}</ButtonText>
    </StyledButton>
  );
}
