import styled from "styled-components";

export const GridItemsBox = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;

  position: relative;
`;

export const MainVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const MainFontContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
`;

export const MainFontStyle = styled.div`
  font-weight: 800;
  font-size: 100px;
  line-height: 125px;

  color: white;
`;

export const SideFontStyle = styled.div`
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;

  color: white;
`;
