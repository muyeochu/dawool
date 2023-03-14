import styled from "styled-components";

import MainFirst from "../components/main/index";
import MainSecond from "../components/main2/index";
import MainThird from "../components/main3/index";
import MainFourth from "../components/main4";

const MainGridItems = styled.div`
  grid-column: 1 / span 3;
`;

const IntroPage = () => {
  return (
    <MainGridItems>
      <MainFirst />
      <MainSecond />
      <MainThird />
      <MainFourth />
    </MainGridItems>
  );
};

export default IntroPage;
