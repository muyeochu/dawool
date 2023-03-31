import React from "react";
import { StyledButton, ButtonText } from "./styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  firstState,
  finalFirstState,
  secondState,
  thirdState,
  fourthState,
  fifthState,
} from "../../../recoil/SurveyState";
import { postSurveySelector } from "../../../recoil/SurveySelector";

interface SaveBtnProps {
  checkedIcCount: number;
}

const SaveBtn = ({ checkedIcCount }: SaveBtnProps) => {
  const isActive = checkedIcCount === 5;
  const fianlStateValue = useRecoilValue(finalFirstState);
  const setFinalFirstValue = useSetRecoilState(finalFirstState);
  const firstStateValue = useRecoilValue(firstState);
  const secondStateValue = useRecoilValue(secondState);
  const thirdStateValue = useRecoilValue(thirdState);
  const fourthStateValue = useRecoilValue(fourthState);
  const fifthStateValue = useRecoilValue(fifthState);

  // firstState 값을 string으로 변환하여 finalFirstState에 업데이트
  const handleSave = () => {
    const finalValue = firstStateValue.join("");
    setFinalFirstValue(finalValue);
  };

  const handleClick = async () => {
    if (isActive) {
      handleSave();
      try {
        await postSurveySelector({
          finalFirstState: fianlStateValue,
          secondState: secondStateValue,
          thirdState: thirdStateValue,
          fourthState: fourthStateValue,
          fifthState: fifthStateValue,
        });
        alert("설문이 완료되었습니다.");
      } catch (error) {
        console.error(error);
        alert("설문 제출에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("설문을 완료해주세요!");
    }
  };

  return (
    <StyledButton isActive={isActive} onClick={handleClick}>
      <ButtonText>저장</ButtonText>
    </StyledButton>
  );
};

export default SaveBtn;
