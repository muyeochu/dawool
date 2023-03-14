import styled from "styled-components";
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  width: 100%;
  height: 100%;
`;

export const InvisibleBox = styled.div`
  height: 60px;
  visibility: hidden;
`;

export const BoxMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-size:cover;
`;

export const AppContainer = styled.div`
    min-height:100%;
`;

export const FooterStyle = styled.footer``;
