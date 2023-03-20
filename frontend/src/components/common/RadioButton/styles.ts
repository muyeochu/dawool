import styled from "styled-components";
import { white, black, mainColor, grey, blue } from "../../../styles/Colors";

// radio button group wrapping
export const Wrapper = styled.div`
  padding: 0.5rem;
  display: grid;
  gap: 1rem;
`;

// radio button과 label wrapping
export const RadioWrapper = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
`;

// custom radio button
export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 28px;
  height: 28px;
  border: 1.5px solid ${mainColor};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  /* 내부 점 */
  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 7px;
  }
  /* 선택됐을 때 */
  :checked {
    ::after {
      background-color: ${mainColor};
    }
    :hover {
      background-color: ${white};
      border: 1.5px solid ${mainColor};
      ::after {
        background-color: ${mainColor};
      }
    }
  }
  :focus {
    outline: 3px solid ${blue[200]};
  }
  :hover {
    ::after {
      background-color: ${blue[200]};
    }
  }
  /* edge case */
  :disabled {
    cursor: not-allowed;
    border: 1.5px solid ${blue[400]};
    background-color: ${mainColor};
    :hover {
      ::after {
        background-color: ${mainColor};
      }
    }
    :checked {
      ::after {
        background-color: ${blue[400]};
      }
      :hover {
        background-color: ${mainColor};
        ::after {
          background-color: ${blue[400]};
        }
      }
    }
  }
`;

// radio button label
export const Label = styled.label`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: ${black};
`;
