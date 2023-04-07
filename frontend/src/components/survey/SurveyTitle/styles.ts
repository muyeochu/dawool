import styled from "styled-components";
import { grey } from "../../../styles/Colors";

import { ReactComponent as SurveyPgIc } from "../../../assets/icon/surveypgIc.svg";

export const SurveyTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 85px;

  p {
    font-weight: 700;
    font-size: 45px;
    line-height: 56px;
    margin-left: 5px;
  }
`;

export const SurveyPgIcStyle = styled(SurveyPgIc)`
  width: 65px;
  height: 65px;
  margin-left: -7px;
  margin-top: 5px;
`;

export const ExpTitleStyle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 54px;
  color: ${grey[400]};
  margin-bottom: 60px;
  margin-top: -12px;
`;
