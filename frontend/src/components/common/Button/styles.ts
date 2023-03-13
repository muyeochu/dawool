import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const Container = styled.button<ButtonProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;

// import styled, { css } from "styled-components";
// import { ButtonProps } from ".";
// import { white, black, mainColor, grey, blue } from "../../../styles/Colors";

// const BtnColor = {
//   primary: css`
//     color: ${black};
//     background-color: ${white};
//   `,
//   activate: css`
//     color: ${white};
//     background-color: ${mainColor};
//   `,
// };

// /* hover 했을 때 옵션
// const Hover = {
//   primary: css`
//     background-color: ${grey[100]};
//   `,
//   activate: css`
//     background-color: ${blue[600]};
//   `,
// };
// */

// export const Container = styled.button<ButtonProps>`
//   /* 전체 frame */
//   box-sizing: border-box;

//   /* auto layout */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 14px 34px;
//   gap: 5px;
//   cursor: pointer;
//   border: 3px solid ${mainColor};
//   border-radius: 20px;

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* font layout */
//   font-family: "SUIT";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 22px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   color: ${black};

//   ${(props) => props.color && BtnColor[props.color]}
// `;
