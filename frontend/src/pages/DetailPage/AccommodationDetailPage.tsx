import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailComponent from "../../components/Detail";
import { getDetailApi } from "../../recoil/Api";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const AccommodationDetailPage = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  // "accommodation/2528117"에서 "2528117"만 가져옴
  const contentId = pathArray[pathArray.length - 1];

  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const getDetailData = async () => {
      const detailQuery = {
        contentId: contentId,
        location: 32,
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
          {detailData && <DetailComponent myData={detailData} location={32} />}
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default AccommodationDetailPage;
