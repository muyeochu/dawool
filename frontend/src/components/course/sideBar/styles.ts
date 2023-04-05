import styled from "styled-components";
import { white, black } from "../../../styles/Colors";
import { SideHeader } from "../styles";

export const SideInHeader = styled(SideHeader)`
  background-color: ${white};
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5%;
`;
export const SideInHeaderText = styled.h4`
  color: ${black};
  margin-left: 5%;
`;
