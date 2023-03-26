import { InfoBox, InfoFontStyle } from "./styles";

const TourSpotDetailInfo = ({ myData }: any) => {
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
          <b>체험안내</b>
          <InfoFontStyle>
            {myData.info.expGuide === "0" ? "없음" : myData.info.expGuide}
          </InfoFontStyle>
        </li>
        <li>
          <b>체험가능 연령</b>
          <InfoFontStyle>
            {myData.info.expAgeRange === "0" ? "없음" : myData.info.expAgeRange}
          </InfoFontStyle>
        </li>
        <li>
          <b>세계문화유산 유무</b>
          <InfoFontStyle>
            {myData.info.heritage1 ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>세계자연유산 유무</b>
          <InfoFontStyle>
            {myData.info.heritage2 ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>세계기록유산 유무</b>
          <InfoFontStyle>
            {myData.info.heritage3 ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>전화번호</b>
          <InfoFontStyle>
            {myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter}
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
          <b>쉬는날</b>
          <InfoFontStyle>
            {myData.info.restDate === "0" ? "없음" : myData.info.restDate}
          </InfoFontStyle>
        </li>
        <li>
          <b>이용시기</b>
          <InfoFontStyle>
            {myData.info.useSeason === "0"
              ? "문의 필요"
              : myData.info.useSeason}
          </InfoFontStyle>
        </li>
        <li>
          <b>이용시간</b>
          <InfoFontStyle>
            {myData.info.useTime === "0" ? "문의 필요" : myData.info.useTime}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default TourSpotDetailInfo;
