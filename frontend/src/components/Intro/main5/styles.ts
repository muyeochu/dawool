import styled from "styled-components";

import { ReactComponent as main5Img } from "../../../assets/images/main5Img.svg";
import { mainColor, blue } from "../../../styles/Colors";

export const MainFifthContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${blue[100]};
`;

export const Main5ImgStyle = styled(main5Img)`
  margin-bottom: 20px;
`;

export const MainFontStyle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.4;
  text-align: center;
`;

export const ColorFontStyle = styled.div`
  color: ${blue[600]};
`;

export const BtnStyle = styled.button`
  transition: transform 0.2s ease-in-out;

  width: 330px;
  height: 60px;
  background-color: ${mainColor};
  color: white;
  border: none;
  border-radius: 18px;
  margin-top: 50px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: ${blue[500]};
  }
`;

export const BtnFontStyle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
`;

export const SideFontStyle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
