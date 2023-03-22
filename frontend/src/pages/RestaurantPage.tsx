import React from "react";
import styled from "styled-components";
import TripList from "../components/trip/tripList";

const MainGridItems = styled.div`
  grid-column: 1 / span 3;
  background-color: grey;
  height: 92vh;
`;

const TripListGridItems = styled.div`
  grid-column: 2 / span 1;
`;

export const RowGridContainer = styled.div`
  display: grid;
  grid-template-rows: 110px auto 110px;
  width: 100%;
  height: 100%;
`;

export const RowGridItems = styled.div`
  grid-row: 2 / span 1;
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
        <RowGridContainer>
          <RowGridItems>
            <TripList titleType="restaurant"/>
          </RowGridItems>
        </RowGridContainer>
      </TripListGridItems>
    </>
  );
};

export default RestaurantPage;
