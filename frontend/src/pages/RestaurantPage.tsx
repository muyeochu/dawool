import React from "react";
import styled from "styled-components";
import TripList from "../components/trip/tripList";

const MainGridItems = styled.div`
  grid-column: 1 / span 3;
  background-color: grey;
  height: 100vh;
`;

const TripListGridItems = styled.div`
  grid-column: 2 / span 1;
  background-color: blue;
`;

const RestaurantPage = () => {
  return (
    <>
      {/* 추천 식당 */}
      <MainGridItems>
        <div>추천 부분</div>
      </MainGridItems>

      {/* 식당 목록 list */}
      <TripListGridItems>
        <TripList />
      </TripListGridItems>
    </>
  );
};

export default RestaurantPage;
