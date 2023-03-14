import MainFirst from "../components/main/index";
import MainSecond from "../components/main2/index";
import styled from "styled-components";

const MainGridItems = styled.div`
  grid-column: 1 / span 3;
`;

const IntroPage = () => {
  return (
    <MainGridItems>
      <MainFirst />
      <MainSecond />
    </MainGridItems>
  );
};

export default IntroPage;
