import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import TripList from "../../components/trip/tripList";
import TripRec from "../../components/trip/tripRec";
import useModal from "../../components/utils/useModal";
import { isSurveyState } from "../../recoil/UserState";
import { isJustLook } from "../../recoil/SurveyState";

import { ReactComponent as SurveyModalImg } from "../../assets/images/surveyModalImg.svg";

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
  const token = localStorage.getItem("token");
  const { openModal, closeModal } = useModal();
  const isSurvey = useRecoilValue(isSurveyState);
  const justLook = useRecoilValue(isJustLook);

  const modalData = {
    type: "survey",
    content: <SurveyModalImg />,
    callback: () => {
      closeModal();
    },
  };

  useEffect(() => {
    if (token && !isSurvey && !justLook) {
      openModal(modalData);
    }
    return () => {
      closeModal();
    };
  }, [token, isSurvey, justLook]);

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
