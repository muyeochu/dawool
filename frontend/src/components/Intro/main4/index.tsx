import { useState, useEffect } from "react";

import {
  MainFourthContainer,
  MainFontStyle,
  SideFontStyle,
  CardsContainer,
  CardBox,
  CardOutFontStyle,
  CardStyle,
  CardInFontStyle,
  ColorFont,
} from "./styles";

const MainFourth = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isBoxAnimation, setIsBoxAnimation] = useState(false);

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
    if (scrollPosition > 1600) {
      setIsAnimation(true);
    } else {
      setIsAnimation(false);
    }

    if (scrollPosition > 1900) {
      setIsBoxAnimation(true);
    } else {
      setIsBoxAnimation(false);
    }
  }, [scrollPosition]);

  return (
    <MainFourthContainer>
      <MainFontStyle isanimation={isAnimation.toString()}>
        다울이 취향에 맞는 여행지를 찾아줄게요
      </MainFontStyle>
      <SideFontStyle isanimation={isAnimation.toString()}>
        간단한 취향 설문으로 여행지와 식당, 숙박을 추천해드려요!
      </SideFontStyle>

      <CardsContainer>
        <CardBox className="box1" isanimation={isBoxAnimation.toString()}>
          <CardOutFontStyle>여행 취향</CardOutFontStyle>
          <CardStyle>
            <CardInFontStyle>
              <ColorFont>간단한 설문</ColorFont>
              으로
              <br /> 취향을 알려주세요!
            </CardInFontStyle>
          </CardStyle>
        </CardBox>

        <CardBox className="box2" isanimation={isBoxAnimation.toString()}>
          <CardOutFontStyle>무장애 포함 여부</CardOutFontStyle>
          <CardStyle>
            <CardInFontStyle>
              <ColorFont>장애인</ColorFont>,<ColorFont>노인</ColorFont>,
              <ColorFont>영유아</ColorFont>와<br />
              함께 하나요?
            </CardInFontStyle>
          </CardStyle>
        </CardBox>

        <CardBox className="box3" isanimation={isBoxAnimation.toString()}>
          <CardOutFontStyle>관심있는 여행지</CardOutFontStyle>
          <CardStyle>
            <CardInFontStyle>
              <ColorFont>최근 본 여행지</ColorFont>를<br />
              기반으로 알려드릴게요!
            </CardInFontStyle>
          </CardStyle>
        </CardBox>
      </CardsContainer>
    </MainFourthContainer>
  );
};

export default MainFourth;
