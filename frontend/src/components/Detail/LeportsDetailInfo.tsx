import { InfoBox, InfoFontStyle } from "./styles";

const LeportsDetailInfo = ({ myData }: any) => {
  return (
    <InfoBox>
      <ul>
        <li>
          <b>주소</b>
          <InfoFontStyle>
            {myData.info.addr1 === "0" ? "없음" : myData.info.addr1}
          </InfoFontStyle>
        </li>
        <li>
          <b>홈페이지</b>
          <InfoFontStyle>
            {myData.info.homepage === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.homepage }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <b>유모차 대여</b>
          <InfoFontStyle>
            {myData.info.isBabyCarriage ? "가능" : "불가능"}
          </InfoFontStyle>
        </li>
        <li>
          <b>애완동물 동반</b>
          <InfoFontStyle>{myData.info.isPet ? "가능" : "불가능"}</InfoFontStyle>
        </li>
        <li>
          <b>체험가능 연령</b>
          <InfoFontStyle>
            {myData.info.expAgeRange === "0" ? "없음" : myData.info.expAgeRange}
          </InfoFontStyle>
        </li>
        <li>
          <b>문의 및 안내</b>
          <InfoFontStyle>
            {myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter}
          </InfoFontStyle>
        </li>
        <li>
          <b>개장기간</b>
          <InfoFontStyle>
            {myData.info.openPeriod === "0" ? "없음" : myData.info.openPeriod}
          </InfoFontStyle>
        </li>
        <li>
          <b>주차시설</b>
          <InfoFontStyle>
            {myData.info.commonParking === "0"
              ? "없음"
              : myData.info.commonParking}
          </InfoFontStyle>
        </li>
        <li>
          <b>주차요금</b>
          <InfoFontStyle>
            {myData.info.parkingFee === "0"
              ? "문의 필요"
              : myData.info.parkingFee}
          </InfoFontStyle>
        </li>
        <li>
          <b>예약안내</b>
          <InfoFontStyle>
            {myData.info.parkingFee === "0"
              ? "문의 필요"
              : myData.info.parkingFee}
          </InfoFontStyle>
        </li>
        <li>
          <b>입장료</b>
          <InfoFontStyle>
            {myData.info.useFee === "0" ? "문의 필요" : myData.info.useFee}
          </InfoFontStyle>
        </li>
        <li>
          <b>이용시간</b>
          <InfoFontStyle>
            {myData.info.useTime === "0" ? "문의 필요" : myData.info.useTime}
          </InfoFontStyle>
        </li>
        <li>
          <b>쉬는날</b>
          <InfoFontStyle>
            {myData.info.restDate === "0" ? "없음" : myData.info.restDate}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default LeportsDetailInfo;
