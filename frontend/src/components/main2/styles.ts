import styled from "styled-components";

import { ReactComponent as Main2Img } from "../../assets/images/main2Img.svg";

export const MainSecondContainer = styled.div`
  height: 100vh;
  position: relative;
`;

export const Main2ImgStyle = styled(Main2Img)`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

export const FontContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(50%, -50%);
`;

export const MainFontStyle = styled.div`
  font-weight: 700;
  font-size: 45px;
  line-height: 62px;
  text-align: right;
`;

export const SideFontStyle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  text-align: right;
  margin-top: 60px;
`;
