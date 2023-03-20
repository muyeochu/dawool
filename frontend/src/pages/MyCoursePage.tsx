import styled from "styled-components";

const CourseContainer=styled.div`
  grid-column: 1/4;
`
const SideItem = styled.div`
  width: 27%;
  height: 100vh;
  float: left;
`
const MapItem = styled.div`
  width: 73%;
  height:100vh;
  float: left;
`

const MyCoursePage = () => {
  return (
    <CourseContainer>
    <SideItem>
        <h1>내 코스 관리</h1>
    </SideItem>
    <MapItem></MapItem>
    </CourseContainer>
  );
};

export default MyCoursePage;