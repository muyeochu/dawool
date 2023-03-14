import styled from "styled-components";
import {blue, grey} from "../../../styles/Colors"

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${(props) => (props.isOpen ? 'auto' : '50px')};
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