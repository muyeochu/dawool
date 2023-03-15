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
  return (
    <MainFourthContainer>
      <MainFontStyle>다울이 취향에 맞는 여행지를 찾아줄게요</MainFontStyle>
      <SideFontStyle>
        간단한 취향 설문으로 여행지와 식당, 숙박을 추천해드려요!
      </SideFontStyle>
      <CardsContainer>
        <CardBox>
          <CardOutFontStyle>여행 취향</CardOutFontStyle>
          <CardStyle>
            <CardInFontStyle>
              <ColorFont>간단한 설문</ColorFont>
              으로
              <br /> 취향을 알려주세요!
            </CardInFontStyle>
          </CardStyle>
        </CardBox>

        <CardBox>
          <CardOutFontStyle>무장애 포함 여부</CardOutFontStyle>
          <CardStyle>
            <CardInFontStyle>
              <ColorFont>장애인</ColorFont>,<ColorFont>노인</ColorFont>,
              <ColorFont>영유아</ColorFont>와<br />
              함께 하나요?
            </CardInFontStyle>
          </CardStyle>
        </CardBox>

        <CardBox>
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
