import styled from "styled-components";
import {
  MainFirst,
  MainSecond,
  MainThird,
  MainFourth,
  MainFifth,
} from "../components/Intro/index";

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
      <MainFifth />
    </MainGridItems>
  );
};

export default IntroPage;
