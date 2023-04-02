import { InfoBox, InfoMainFontStyle, InfoFontStyle } from "./styles";

const TourSpotDetailInfo = ({ myData }: any) => {
  return (
    <InfoBox>
      <ul>
        <li>
          <InfoMainFontStyle>주소</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.addr1 === "0" ? (
              "없음"
            ) : (
              <span dangerouslySetInnerHTML={{ __html: myData.info.addr1 }} />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>홈페이지</InfoMainFontStyle>
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
          <InfoMainFontStyle>유모차 대여</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.isBabyCarriage ? "가능" : "불가능"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>애완동물 동반</InfoMainFontStyle>
          <InfoFontStyle>{myData.info.isPet ? "가능" : "불가능"}</InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>체험안내</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.expGuide === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.expGuide }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>체험가능 연령</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.expAgeRange === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.expAgeRange }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>세계문화유산 유무</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.heritage1 ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>세계자연유산 유무</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.heritage2 ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>세계기록유산 유무</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.heritage3 ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>전화번호</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.infoCenter === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.infoCenter }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>주차시설</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.commonParking === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.commonParking }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>쉬는날</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.restDate === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.restDate }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>이용시기</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.useSeason === "0" ? (
              "문의 필요"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.useSeason }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>이용시간</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.useTime === "0" ? (
              "문의 필요"
            ) : (
              <span dangerouslySetInnerHTML={{ __html: myData.info.useTime }} />
            )}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default TourSpotDetailInfo;
