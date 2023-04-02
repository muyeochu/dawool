import { InfoBox, InfoMainFontStyle, InfoFontStyle } from "./styles";

const AccommodationDetailInfo = ({ myData }: any) => {
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
          <InfoMainFontStyle>입실시간</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.checkInTime === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.checkInTime }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>퇴실시간</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.checkOutTime === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.checkOutTime }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>취사 여부</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.isCooking === "0" ? "불가능" : "가능"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>한옥 여부</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.hanok ? "한옥" : "한옥 아님"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>문의 및 안내</InfoMainFontStyle>
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
          <InfoMainFontStyle>픽업 서비스</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.pickup === "0" ? "없음" : myData.info.pickup}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>예약안내 홈페이지</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.reservationUrl === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.reservationUrl }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>부대시설</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.subFacility === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.subFacility }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>바베큐장</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.barbecue ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>휘트니스 센터</InfoMainFontStyle>
          <InfoFontStyle>{myData.info.fitness ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>음료</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.beverage ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>자전거 대여</InfoMainFontStyle>
          <InfoFontStyle>{myData.info.bicycle ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>캠프파이어</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.campfire ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>노래방</InfoMainFontStyle>
          <InfoFontStyle>{myData.info.karaoke ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>공용 샤워실</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.publicBath ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>공용 PC방</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.publicPc ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>사우나실</InfoMainFontStyle>
          <InfoFontStyle>{myData.info.sauna ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>스포츠시설</InfoMainFontStyle>
          <InfoFontStyle>{myData.info.sports ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>환불규정</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.refundRegulation === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{
                  __html: myData.info.refundRegulation,
                }}
              />
            )}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default AccommodationDetailInfo;
