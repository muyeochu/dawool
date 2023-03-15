import { useNavigate } from "react-router-dom";

import {
  MainFifthContainer,
  Main5ImgStyle,
  MainFontStyle,
  ColorFontStyle,
  ButtonStyle,
  ButtonFontStyle,
  SideFontStyle,
} from "./styles";

const MainFifth = () => {
  const navigate = useNavigate();

  const justLookAround = () => {
    navigate("/tourspot");
  };

  const wantRec = () => {
    // 로그인 된 상태라면
    // navigate("/tourspot")
    // 로그인 하지 않은 상태라면
    navigate("/login");
  };

  return (
    <MainFifthContainer>
      <Main5ImgStyle />
      <MainFontStyle>
        다울의 여행지 추천 서비스,
        <br />
        <ColorFontStyle>지금 시작해보세요</ColorFontStyle>
      </MainFontStyle>
      <ButtonStyle>
        <ButtonFontStyle onClick={wantRec}>추천받기</ButtonFontStyle>
      </ButtonStyle>
      <SideFontStyle onClick={justLookAround}>그냥 둘러볼래요</SideFontStyle>
    </MainFifthContainer>
  );
};

export default MainFifth;
