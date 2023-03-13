import { convertCompilerOptionsFromJson } from "typescript";
import {
  GridItemsBox,
  MainVideo,
  MainFontContainer,
  MainFontStyle,
  SideFontStyle,
} from "./styles";

const MainFirst = () => {
  return (
    <GridItemsBox>
      <MainFontContainer>
        <MainFontStyle>다울</MainFontStyle>
        <SideFontStyle>
          모든 사람들이 즐길 수 있는 여행 <br></br>무장애 여행 추천
          서비스입니다.
        </SideFontStyle>
      </MainFontContainer>
      <MainVideo
        src={process.env.PUBLIC_URL + "/videos/pexels-cottonbro-10435533.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
    </GridItemsBox>
  );
};

export default MainFirst;
