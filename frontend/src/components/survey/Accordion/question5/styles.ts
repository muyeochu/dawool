import styled from "styled-components";
import { white, black } from "../../../../styles/Colors";

export const FifthQuestionContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  background-color: ${white};

  margin-top: 16px;
  padding: 16px 60px 16px 60px;
`;

export const FifthQuestionTextContainer = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  margin-left: 48px;

  display: flex;
  align-items: center;
  color: ${black};
`;

export const FifthQuestionCardsContainer = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${white};
  gap: 20px;
`