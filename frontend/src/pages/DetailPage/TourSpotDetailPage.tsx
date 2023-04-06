import { useEffect, useState } from "react";
import DetailComponent from "../../components/Detail";
import { useLocation } from "react-router-dom";
import { getDetailApi } from "../../recoil/Api";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const TourSpotDetailPage = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const contentId = pathArray[pathArray.length - 1];

  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const getDetailData = async () => {
      const detailQuery = {
        contentId: contentId,
        location: 12,
      };
      const res = await getDetailApi(detailQuery);
      const data = await res.data;
      setDetailData(data);
      console.log("데이터몬데..", data);
      console.log("setData좀", detailData);
    };
    getDetailData();
  }, [contentId]);

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          {detailData && <DetailComponent myData={detailData} location={12} />}
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default TourSpotDetailPage;
