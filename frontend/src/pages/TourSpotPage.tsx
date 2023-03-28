import React from "react";
import styled from "styled-components";
import TripList from "../components/trip/tripList";
import TripRec from "../components/trip/tripRec";

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

const TourSpotPage = () => {
  return (
    <>
      {/* 추천 관광지 */}
      <MainGridItems>
      <TripRec titleType="tourSpot" />
      </MainGridItems>

      {/* 관광지 목록 list */}
      <TripListGridItems>
        <RowGridContainer>
          <RowGridItems>
            <TripList titleType="tourSpot" />
          </RowGridItems>
        </RowGridContainer>
      </TripListGridItems>
    </>
  );
};

export default TourSpotPage;
