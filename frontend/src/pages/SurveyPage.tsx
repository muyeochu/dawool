import React from "react";
import { SurveyTitle } from "../components/survey/SurveyTitle/styles";
import { AccordionListContainer } from "../components/survey/Accordion/styles";
import Accordion from "../components/survey/Accordion/index";
import FirstQuestion from "../components/survey/Accordion/question1";
import styled from "styled-components";
import ThirdQuestion from "../components/survey/Accordion/question3";
import FourthQuestion from "../components/survey/Accordion/question4";
import SecondQuestion from "../components/survey/Accordion/question2";

// grid 설정
const MainGridItems = styled.div`
  grid-column: 2 / span 1;
`;

const SurveyPage = () => {
  return (
    <MainGridItems>
      <SurveyTitle>취향설문</SurveyTitle>

      <AccordionListContainer>
        <Accordion title="누구와 여행을 할 계획인가요?">
          <FirstQuestion />
        </Accordion>

        <Accordion title="어디서 출발하나요?">
          <SecondQuestion />
        </Accordion>

        <Accordion title="선호하는 이동거리가 있나요?">
          <ThirdQuestion />
        </Accordion>

        <Accordion title="인기있는 관광지에 방문하는 것을 선호하나요?">
          <FourthQuestion />
        </Accordion>

        <Accordion title="가봤거나 가보고 싶은 곳은 어디인가요?">
          <p>Content for section 2 goes here</p>
        </Accordion>
      </AccordionListContainer>
    </MainGridItems>
  );
};

export default SurveyPage;
