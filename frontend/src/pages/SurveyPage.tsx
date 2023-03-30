import React from "react";
import { SurveyTitle } from "../components/survey/SurveyTitle/styles";
import { AccordionListContainer } from "../components/survey/Accordion/styles";
import styled from "styled-components";
import Accordion from "../components/survey/Accordion/index";

// question 1~5
import FirstQuestion from "../components/survey/Accordion/question1";
import ThirdQuestion from "../components/survey/Accordion/question3";
import FourthQuestion from "../components/survey/Accordion/question4";
import SecondQuestion from "../components/survey/Accordion/question2";
import FifthQuestion from "../components/survey/Accordion/question5";

import SaveBtn from "../components/survey/SaveBtn";

// grid 설정
const MainGridItems = styled.div`
  grid-column: 2 / span 1;
`;

const SurveyPage = () => {
  return (
    <MainGridItems>
      <SurveyTitle>취향설문</SurveyTitle>

      <AccordionListContainer>
        <Accordion title="누구와 여행을 할 계획인가요?" id="firstAccordion">
          <FirstQuestion />
        </Accordion>

        <Accordion title="어디서 출발하나요?" id="secondAccordion">
          <SecondQuestion />
        </Accordion>

        <Accordion title="선호하는 이동거리가 있나요?" id="thirdAccordion">
          <ThirdQuestion isOpen={true} />
        </Accordion>

        <Accordion title="인기있는 관광지에 방문하는 것을 선호하나요?" id="fourthAccordion">
          <FourthQuestion />
        </Accordion>

        <Accordion title="가봤거나 가보고 싶은 곳은 어디인가요?" id="fifthAccordion">
          <FifthQuestion />
        </Accordion>

        <SaveBtn />
      </AccordionListContainer>
    </MainGridItems>
  );
};

export default SurveyPage;
