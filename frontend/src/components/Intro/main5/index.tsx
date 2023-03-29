import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/UserState";

import {
  MainFifthContainer,
  Main5ImgStyle,
  MainFontStyle,
  ColorFontStyle,
  BtnStyle,
  BtnFontStyle,
  SideFontStyle,
} from "./styles";

const MainFifth = () => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(userState);

  const justLookAround = () => {
    navigate("/tourspot");
  };

  const wantRec = () => {
    if (isLogin.accessToken.length >= 1) {
      navigate("/tourspot");
    } else {
      navigate("/login");
    }
  };

  return (
    <MainFifthContainer>
      <Main5ImgStyle />
      <MainFontStyle>
        다울의 여행지 추천 서비스,
        <br />
        <ColorFontStyle>지금 시작해보세요</ColorFontStyle>
      </MainFontStyle>
      <BtnStyle>
        <BtnFontStyle onClick={wantRec}>추천받기</BtnFontStyle>
      </BtnStyle>
      <SideFontStyle onClick={justLookAround}>그냥 둘러볼래요</SideFontStyle>
    </MainFifthContainer>
  );
};

export default MainFifth;
