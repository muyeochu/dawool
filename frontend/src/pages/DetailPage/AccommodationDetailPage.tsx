import DetailComponent from "../../components/Detail";

import { useRecoilValue } from "recoil";
import { getDataSelector } from "../../recoil/DetailSelectors";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";
import { useParams } from "react-router-dom";

const AccommodationDetailPage = () => {
  // contentid
  const { id } = useParams();

  const myData = useRecoilValue(
    getDataSelector({ contentId: 143033, location: 32 })
  );

  console.log("myData 원본은?", myData);

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          <DetailComponent myData={myData} location={32} />
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default AccommodationDetailPage;
