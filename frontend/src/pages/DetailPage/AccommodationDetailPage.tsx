import DetailComponent from "../../components/Detail";
import { useLocation } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { getDataSelector } from "../../recoil/DetailSelectors";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const AccommodationDetailPage = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  // "accommodation/2528117"에서 "2528117"만 가져옴
  const contentId = pathArray[pathArray.length - 1];

  const myData = useRecoilValue(
    getDataSelector({ contentId: contentId, location: 32 })
  );

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          {myData && <DetailComponent myData={myData} location={32} />}
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default AccommodationDetailPage;
