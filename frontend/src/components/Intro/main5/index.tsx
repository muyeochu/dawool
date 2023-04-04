import { useState, useEffect } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isFontAnimation, setIsFontAnimation] = useState(false);
  const [isBtnAnimation, setIsBtnAnimation] = useState(false);

  const justLookAround = () => {
    navigate("/tourspot");
  };

  const wantRec = () => {
    if (isLogin.accessToken.length >= 1) {
      navigate("/tourspot");
    } else {
      navigate("/login");
      window.location.reload();
    }
  };

  // Scroll 위치를 감지
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 2500) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }

    if (scrollPosition > 2600) {
      setIsFontAnimation(true);
    } else {
      setIsFontAnimation(false);
    }

    if (scrollPosition > 2800) {
      setIsBtnAnimation(true);
    } else {
      setIsBtnAnimation(false);
    }
  }, [scrollPosition]);

  return (
    <MainFifthContainer>
      <Main5ImgStyle isAnimation={isAnimation.toString()} />
      <MainFontStyle isAnimation={isFontAnimation.toString()}>
        다울의 여행지 추천 서비스,
        <br />
        <ColorFontStyle>지금 시작해보세요</ColorFontStyle>
      </MainFontStyle>
      <BtnStyle isAnimation={isBtnAnimation.toString()}>
        <BtnFontStyle onClick={wantRec}>추천받기</BtnFontStyle>
      </BtnStyle>
      <SideFontStyle
        onClick={justLookAround}
        isAnimation={isBtnAnimation.toString()}
      >
        그냥 둘러볼래요
      </SideFontStyle>
    </MainFifthContainer>
  );
};

export default MainFifth;
