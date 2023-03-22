import styled from "styled-components";

export const MainGridItems = styled.div`
  grid-column: 2 / span 1;
  height: 100vh;
`;

export const RowGridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  width: 100%;
  height: 100%;
`;

export const RowGridItems = styled.div`
  grid-row: 2 / span 1;
`;
