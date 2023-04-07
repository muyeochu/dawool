import { useEffect, useState } from "react";
import DetailComponent from "../../components/Detail";
import { useLocation } from "react-router-dom";
import { getDetailApi } from "../../recoil/Api";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const ShoppingDetailPage = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const contentId = pathArray[pathArray.length - 1];

  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const getDetailData = async () => {
      const detailQuery = {
        contentId: contentId,
        location: 38,
      };
      const res = await getDetailApi(detailQuery);
      const data = await res.data;
      setDetailData(data);

    };
    getDetailData();
  }, [contentId]);

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          {detailData && <DetailComponent myData={detailData} location={38} />}
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default ShoppingDetailPage;
