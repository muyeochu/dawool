import { useRecoilValue } from "recoil";
import {
  SurveyTitle,
  SurveyPgIcStyle,
  ExpTitleStyle,
} from "../components/survey/SurveyTitle/styles";
import { AccordionListContainer } from "../components/survey/Accordion/styles";
import styled from "styled-components";
import Accordion from "../components/survey/Accordion/index";
import {
  firstState,
  secondState,
  thirdState,
  fourthState,
  fifthState,
} from "../recoil/SurveyState";

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
  const first = useRecoilValue(firstState);
  const second = useRecoilValue(secondState);
  const third = useRecoilValue(thirdState);
  const fourth = useRecoilValue(fourthState);
  const fifth = useRecoilValue(fifthState);
  const checkedIcCount = [first, second, third, fourth, fifth].filter(
    (state) => state !== "" && state.length !== 0
  ).length;

  return (
    <MainGridItems>
      <SurveyTitle>
        <SurveyPgIcStyle />
        <p>취향 설문</p>
      </SurveyTitle>
      <ExpTitleStyle>
        간단한 설문을 작성하고 취향에 맞는 여행지를 추천받으세요!
      </ExpTitleStyle>

      <AccordionListContainer>
        <Accordion
          title="누구와 여행을 할 계획인가요?"
          id="firstAccordion"
          isOpen={true}
        >
          <FirstQuestion />
        </Accordion>

        <Accordion title="어디서 출발하나요?" id="secondAccordion">
          <SecondQuestion />
        </Accordion>

        <Accordion title="선호하는 이동거리가 있나요?" id="thirdAccordion">
          <ThirdQuestion isOpen={true} />
        </Accordion>

        <Accordion
          title="인기있는 관광지에 방문하는 것을 선호하나요?"
          id="fourthAccordion"
        >
          <FourthQuestion />
        </Accordion>

        <Accordion
          title="가봤거나 가보고 싶은 곳은 어디인가요?"
          id="fifthAccordion"
        >
          <FifthQuestion />
        </Accordion>

        <SaveBtn checkedIcCount={checkedIcCount} />
      </AccordionListContainer>
    </MainGridItems>
  );
};

export default SurveyPage;
