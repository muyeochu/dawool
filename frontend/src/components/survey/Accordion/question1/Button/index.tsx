import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledButton, ButtonText } from "./styles";
import { buttonState } from "./ButtonState";

// 버튼 컴포넌트의 props를 정의한 인터페이스
interface ButtonProps {
  id: number;
  onClick: () => void;
  children: React.ReactNode;
  isClicked?: boolean;
}

export default function Q1Button({ id, onClick, children, isClicked }: ButtonProps) {
  // 클릭여부 상태값 관리 (기본값 'false')
  const [isClickedState, setIsClickedState] = useState(false);
  // console.log(isClicked)

  // Recoil의 'buttonState' 값을 가져와 button과 setButton을 반환
  const [button, setButton] = useRecoilState(buttonState);

  // isClicked 값이 변경될 때마다 setButton 함수 사용하여 buttonState 값 업데이트
  useEffect(() => {
    setIsClickedState(isClicked || false);
  }, [isClicked]);

  // activeButtonId : isClickedState가 true인 경우 id 값을 가지고 있고, false인 경우 빈 문자열("") 값 가짐
  useEffect(() => {
    setButton((prevState) => ({
      ...prevState,
      activeButtonId: isClickedState ? id : "",
    }));
  }, [id, isClickedState, setButton]);

  // 버튼 클릭 시 onClick 함수 호출, isClickedState 값을 반전시킴
  function handleClick() {
    onClick();
    setIsClickedState(prevState => !prevState);
  }

  return (
    <StyledButton onClick={handleClick} isclicked={isClickedState}>
      <ButtonText isclicked={isClickedState}>{children}</ButtonText>
    </StyledButton>
  );
}