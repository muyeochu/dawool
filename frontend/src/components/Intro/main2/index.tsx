import { useState, useEffect } from "react";

import {
  MainSecondContainer,
  Main2ImgStyle,
  FontContainer,
  MainFontStyle,
  SideFontStyle,
} from "./styles";

const MainSecond = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);

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
    if (scrollPosition > 370) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [scrollPosition]);

  return (
    <MainSecondContainer id="main-second">
      <Main2ImgStyle isanimation={isAnimation.toString()} />
      <FontContainer isanimation={isAnimation.toString()}>
        <MainFontStyle>무장애 여행은요</MainFontStyle>
        <SideFontStyle>
          신체적 제약 때문에 관광활동을 자유롭게 하지 못하는
          <br /> 관광약자를 대상으로 한 여행을 말해요.
          <br />즉 <b>장애인</b>뿐 아니라 <b>노약자</b>, <b>임산부</b>,
          <b>어린이</b> 등의 <br />
          다양한 관광약자가 무장애 여행의 대상이 될 수 있어요.
        </SideFontStyle>
      </FontContainer>
    </MainSecondContainer>
  );
};

export default MainSecond;
