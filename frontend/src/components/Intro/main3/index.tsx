import { useState, useEffect } from "react";

import {
  MainThirdContainer,
  Main3ImgStyle,
  FontContainer,
  MainFontStyle,
  MainImgContainer,
} from "./styles";

const MainThird = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isImgAnimation, setIsImgAnimation] = useState(false);

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
    if (scrollPosition > 900) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (scrollPosition > 1200) {
      setIsImgAnimation(true);
    } else {
      setIsImgAnimation(false);
    }
  }, [scrollPosition]);

  return (
    <MainThirdContainer>
      <FontContainer>
        <MainFontStyle isanimation={isAnimation.toString()}>
          여행지는 정하셨나요?
        </MainFontStyle>
      </FontContainer>
      <MainImgContainer isanimation={isImgAnimation.toString()}>
        <Main3ImgStyle />
      </MainImgContainer>
    </MainThirdContainer>
  );
};

export default MainThird;
