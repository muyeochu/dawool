import styled from "styled-components";
import { white } from "../../../../styles/Colors";

// 설문 문항 전체 감싸는 container
export const HangjungdongContanier = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${white};
  gap: 20px;

  margin-top: 16px;
  padding:16px 60px 16px 60px;
`;