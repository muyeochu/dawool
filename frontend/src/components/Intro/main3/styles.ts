import styled from "styled-components";

import { ReactComponent as Main3Img } from "../../../assets/images/main3Img.svg";
import { blue } from "../../../styles/Colors";

export const MainThirdContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${blue[100]};
`;

export const FontContainer = styled.div`
  text-align: center;
  margin-top: 55px;
`;

export const MainFontStyle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 62px;
  letter-spacing: 0.02em;
`;

export const Main3ImgStyle = styled(Main3Img)`
  margin-top: 50px;
`;
