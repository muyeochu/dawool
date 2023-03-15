import styled from "styled-components";
import { blue, grey } from "../../../styles/Colors";

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
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${(props) => (props.isOpen ? "auto" : "50px")};
`;

export const Header = styled.div`
  background-color: ${blue[100]};
  color: #333;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
`;

export const Body = styled.div`
  padding: 10px;
`;
