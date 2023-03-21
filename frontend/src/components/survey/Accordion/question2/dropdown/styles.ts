import styled from "styled-components";
import {
  white,
  mainColor,
  grey,
  black,
  blue,
} from "../../../../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  background-color: red;
  margin: 20px;
`;

export const Dropdown = styled.select`
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AlertMessage = styled.div`
  color: red;
`;

export const DropdownButton = styled.div`
`

// export const DropdownContanier = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 12px 28px;
//   gap: 5px;

//   background-color: ${grey[50]};
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover:enabled {
//     background-color: ${grey[400]};
//     border: none;
//     color: black;
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// // dropdown 안의 텍스트 스타일 지정
// export const DropdownText = styled.span`
//   font-family: "SUIT";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 15px;
//   line-height: 19px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   color: black;
// `;

// // dropdown 안의 이미지 스타일 지정
// export const DropdownIcon = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// export const Dropdown = styled.select`
//   font-family: "SUIT";

//   margin: 0 1px;
//   padding: 0.5px;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 15px;
//   line-height: 19px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   color: black;
//   background-color: red;
// `;
