import DetailComponent from "../../components/Detail";
import { useLocation } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { getDataSelector } from "../../recoil/DetailSelectors";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const ShoppingDetailPage = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  const contentId = pathArray[pathArray.length - 1];

  const myData = useRecoilValue(
    getDataSelector({ contentId: contentId, location: 38 })
  );


  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          {myData && <DetailComponent myData={myData} location={38} />}
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default ShoppingDetailPage;
