import React from "react";
import styled from "styled-components";
import TripRec from "../components/trip/tripRec";
import TripList from "../components/trip/tripList";

const MainGridItems = styled.div`
  grid-column: 1 / span 3;
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
          <TripRec titleType="restaurant"/>
        </MainGridItems>

        {/* 식당 목록 list */}
        <TripListGridItems>
          <RowGridContainer>
            <RowGridItems>
              <TripList titleType="restaurant" />
            </RowGridItems>
          </RowGridContainer>
        </TripListGridItems>
    </>
  );
};

export default RestaurantPage;
