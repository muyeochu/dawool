import styled from "styled-components";
import KakaoImg from "../../assets/images/kakao_login_large_wide.png";
import { white } from "../../styles/Colors";

export const BackgroundContainer = styled.div`
  grid-column: 1 / span 3;
  height: 92vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: pink;
`;

export const BackgroundImgStyle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;


export const MainFontStyle = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 60px;
  color: ${white};

  position: absolute;
  text-align: center;
  top: 160px; 
  left: 50%; 
  transform: translate(-50%, 50%);
`;

export const KakaoButton = styled.img.attrs({
  src: `${KakaoImg}`,
})`
  width: 480px;
  height: 72px;

  position: absolute;
  text-align: center;
  top: 350px;
  left: 50%; 
  transform: translate(-50%, 50%); 

  cursor: pointer;
`;
