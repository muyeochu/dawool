import styled from "styled-components";

export const MainGridItems = styled.div`
  grid-column: 2 / span 1;
  height: 100%;
`;

export const RowGridContainer = styled.div`
  display: grid;
  grid-template-rows: 90px auto 90px;
  width: 100%;
  height: 100%;
`;

export const RowGridItems = styled.div`
  grid-row: 2 / span 1;
`;

export const EndBlock = styled.div`
  visibility: hidden;
  /* background-color: pink; */
`;
