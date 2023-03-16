import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledButton, ButtonText } from "./styles";
import { buttonState } from "./ButtonState";

// 버튼 컴포넌트의 props를 정의한 인터페이스
interface ButtonProps {
  id: string;
  onClick: () => void;
  children: React.ReactNode;
  isClicked: boolean;
}

export default function Q1Button({ id, onClick, children }: ButtonProps) {
  // 클릭여부 상태값 관리 (기본값 'false')
  const [isClicked, setIsClicked] = useState(false);

  // Recoil의 'buttonState' 값을 가져와 button과 setButton을 반환
  const [button, setButton] = useRecoilState(buttonState);

  // isClicked 값이 변경될 때마다 setButton 함수 사용하여 buttonState 값 업데이터
  useEffect(() => {
    setButton((prevState) => ({
      ...prevState,
      activeButtonId: isClicked ? id : "",
    }));
  }, [id, isClicked, setButton]);

  // 버튼 클릭 이벤트가 발생하면 'isClicked' 상태값 업데이트
  function handleClick() {
    setIsClicked(!isClicked);
    onClick();
  }

  return (
    <StyledButton onClick={handleClick} isClicked={isClicked}>
      <ButtonText isClicked={isClicked}>{children}</ButtonText>
    </StyledButton>
  );
}
