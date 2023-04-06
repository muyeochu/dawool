import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { StyledButton, ButtonText, ButtonIcon } from "./styles";
import { buttonState } from "../../../recoil/ButtonState";
import { searchState } from "../../../recoil/SearchSelector";
import { listBarrierState } from "../../../recoil/TripListSelector";

// icon
import bathchairIc from "../../../assets/icon/bathchairIc.svg";
import eyeIc from "../../../assets/icon/eyeIc.svg";
import earIc from "../../../assets/icon/earIc.svg";
import oldmanIc from "../../../assets/icon/oldmanIc.svg";
import toddlerIc from "../../../assets/icon/toddlerIc.svg";

interface ButtonProps {
  id: number;
  btType: number; // 0: search버튼, 1: 목록버튼
  disabled?: boolean;
  children: React.ReactNode;
  icType?: string;
}

export default function Button({ id, children, icType, btType }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const [listValue, setListValue] = useRecoilState(listBarrierState);

  const [button, setButton] = useRecoilState(buttonState);

  useEffect(() => {
    setButton((prevState) => ({ ...prevState, isClicked }));
  }, [isClicked, setButton]);


  function handleClick() {
    setIsClicked(!isClicked);

    // search 버튼인 경우
    if (btType === 0) {
      const barrierArray = searchValue.barrier.split("");
      barrierArray[id] = barrierArray[id] === "0" ? "1" : "0"; // 현재 버튼의 상태를 토글링
      const barrier = barrierArray.join("");
      setSearchValue({ ...searchValue, barrier: barrier });
    }

    // list 버튼인 경우
    if (btType === 1) {
      const barrierArray = listValue.barrier.split("");
      barrierArray[id] = barrierArray[id] === "0" ? "1" : "0"; // 현재 버튼의 상태를 토글링
      const barrier = barrierArray.join("");
      setListValue({ ...listValue, barrier: barrier });
    }
  }

  let icSrc =
    icType === "ear"
      ? earIc
      : icType === "eye"
      ? eyeIc
      : icType === "oldman"
      ? oldmanIc
      : icType === "bathchair"
      ? bathchairIc
      : icType === "toddler"
      ? toddlerIc
      : "none";

  return (
    <StyledButton onClick={handleClick} isclicked={isClicked.toString()}>
      <ButtonIcon src={icSrc} isclicked={isClicked.toString()} />
      <ButtonText isclicked={isClicked.toString()}>{children}</ButtonText>
    </StyledButton>
  );
}
