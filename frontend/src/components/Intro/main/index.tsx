import {
  MainFirstContainer,
  MainVideo,
  ElementContainer,
  FontContainer,
  MainFontStyle,
  SideFontStyle,
  DonwArrowIcContainer,
  DonwArrowIcStyle,
} from "./styles";

import { Link } from "react-scroll";

const MainFirst = () => {
  return (
    <MainFirstContainer>
      <ElementContainer>
        <FontContainer>
          <MainFontStyle>다울</MainFontStyle>
          <SideFontStyle>
            모든 사람들이 즐길 수 있는 여행 <br></br>무장애 여행 추천
            서비스입니다.
          </SideFontStyle>
        </FontContainer>
      </ElementContainer>

      <MainVideo
        src={process.env.PUBLIC_URL + "/videos/pexels-cottonbro-10435533.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <DonwArrowIcContainer>
        <Link
          to="main-second" // MainSecond 컴포넌트로 이동
          smooth={true}
          duration={300}
        >
          <DonwArrowIcStyle />
        </Link>
      </DonwArrowIcContainer>
    </MainFirstContainer>
  );
};

export default MainFirst;
