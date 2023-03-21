import styled from "styled-components";
import { white, blue, grey } from "../../../styles/Colors";

import { ReactComponent as UpdownIc } from "../../../assets/icon/updownIc.svg";

interface ContainerProps {
  isOpen: boolean;
}

// accordion list 감싸는 container
export const AccordionListContainer = styled.div`
  width: auto;
  height: auto;
  padding: 34px 30px;
  margin-bottom: 138px;
  background: ${grey[50]};
  border-radius: 16px;
`;

// accordion item 감싸는 container
export const AccordionItemContainer = styled.div<ContainerProps>`
  border: none;
  border-radius: 5px;
  margin-bottom: 21px;
  overflow: hidden;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.isOpen ? "auto" : "68px")};
`;

// accordion header
export const HeaderContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isOpen ? blue[100] : "white")};
  color: "black";
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover:enabled {
    background-color: ${blue[500]};
    border: 10px solid ${blue[500]};
    color: "black";
  }
`;

export const HeaderCheckTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 4px;
  gap: 30px;
`;

export const HeaderText = styled.span`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: "black";
`;

export const HeaderIcon = styled.img`
  background: ${grey[100]};
`;

export const UpdownIcStyle = styled(UpdownIc)<ContainerProps>`
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "none")};
`;

// accordion body
export const BodyContainer = styled.div`
  width: auto;
  height: auto;
`;
