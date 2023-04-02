import React from "react";
import {
  FifthQuestionContainer,
  FifthQuestionTextContainer,
  FifthQuestionCardsContainer,
} from "./styles";
import OptionCards from "./OptionCards";

const FifthQuestion = () => {
  return (
    <FifthQuestionContainer>
      <FifthQuestionTextContainer>
        2개 이상 선택해주세요! 🤗
      </FifthQuestionTextContainer>
      <FifthQuestionCardsContainer>
        <OptionCards />
      </FifthQuestionCardsContainer>
    </FifthQuestionContainer>
  );
};

export default FifthQuestion;
