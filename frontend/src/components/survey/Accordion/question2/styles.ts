import styled from "styled-components";
import { white } from "../../../../styles/Colors";

// 설문 문항 전체 감싸는 container
export const HangjungdongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 3px;
  background-color: ${white};
  transition: all 1s ease-in-out;

  margin-top: 16px;
  padding:16px 60px 16px 60px;
`;