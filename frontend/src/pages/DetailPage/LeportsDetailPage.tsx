import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailComponent from "../../components/Detail";
import { getDetailApi } from "../../recoil/Api";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const LeportsDetailPage = () => {
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const contentId = pathArray[pathArray.length - 1];

  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const getDetailData = async () => {
      const detailQuery = {
        contentId: contentId,
        location: 28,
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
          {detailData && <DetailComponent myData={detailData} location={28} />}
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default LeportsDetailPage;
