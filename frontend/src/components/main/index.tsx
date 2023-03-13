import { convertCompilerOptionsFromJson } from "typescript";
import { GridItemsBox, MainVideo } from "./styles";

const MainFirst = () => {
  return (
    <GridItemsBox>
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
