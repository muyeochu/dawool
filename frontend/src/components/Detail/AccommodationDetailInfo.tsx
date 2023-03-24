import { InfoBox, InfoFontStyle } from "./styles";

const AccommodationDetailInfo = ({ myData }: any) => {
  return (
    <InfoBox>
      <ul>
        <li>
          <b>입실 시간</b>
          <InfoFontStyle>{myData.info.checkInTime}</InfoFontStyle>
        </li>
        <li>
          <b>
            퇴실 시간
            <InfoFontStyle>
              {myData.info.checkOutTime ? myData.info.checkOutTime : "없음"}
            </InfoFontStyle>
          </b>
        </li>
        <li>
          <b>취사 여부</b>
          <InfoFontStyle>
            {myData.info.isCooking === "0" ? "불가능" : "가능"}
          </InfoFontStyle>
        </li>
        <li>
          <b>한옥 여부</b>
          <InfoFontStyle>
            {myData.info.hanok ? "한옥" : "한옥 아님"}
          </InfoFontStyle>
        </li>
        <li>
          <b>문의 및 안내</b>
          <InfoFontStyle>
            {myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter}
          </InfoFontStyle>
        </li>
        <li>
          <b>주차 시설</b>
          <InfoFontStyle>
            {myData.info.commonParking === "0"
              ? "없음"
              : myData.info.commonParking}
          </InfoFontStyle>
        </li>
        <li>
          <b>픽업 서비스</b>
          <InfoFontStyle>
            {myData.info.pickup === "0" ? "없음" : myData.info.pickup}
          </InfoFontStyle>
        </li>
        <li>
          <b>예약 안내 홈페이지</b>
          <InfoFontStyle>
            {myData.info.reservationUrl === "0"
              ? "없음"
              : myData.info.reservationUrl}
          </InfoFontStyle>
        </li>
        <li>
          <b>부대 시설</b>
          <InfoFontStyle>
            {myData.info.subFacility === "0" ? "없음" : myData.info.subFacility}
          </InfoFontStyle>
        </li>
        <li>
          <b>바베큐장</b>
          <InfoFontStyle>
            {myData.info.barbecue ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>휘트니스 센터</b>
          <InfoFontStyle>{myData.info.fitness ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <b>음료</b>
          <InfoFontStyle>
            {myData.info.beverage ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>자전거 대여</b>
          <InfoFontStyle>{myData.info.bicycle ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <b>캠프파이어</b>
          <InfoFontStyle>
            {myData.info.campfire ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>노래방</b>
          <InfoFontStyle>{myData.info.karaoke ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <b>공용 샤워실</b>
          <InfoFontStyle>
            {myData.info.publicBath ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>공용 PC방</b>
          <InfoFontStyle>
            {myData.info.publicPc ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>사우나실</b>
          <InfoFontStyle>{myData.info.sauna ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <b>스포츠 시설</b>
          <InfoFontStyle>{myData.info.sports ? "있음" : "없음"}</InfoFontStyle>
        </li>
        <li>
          <b>환불 규정</b>
          <InfoFontStyle>
            {myData.info.refundRegulation === "0"
              ? "없음"
              : myData.info.refundRegulation}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default AccommodationDetailInfo;
