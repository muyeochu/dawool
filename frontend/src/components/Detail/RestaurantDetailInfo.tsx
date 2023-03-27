import { InfoBox, InfoFontStyle } from "./styles";

const RestaurantDetailInfo = ({ myData }: any) => {
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
          <b>대표메뉴</b>
          <InfoFontStyle>
            {myData.info.firstMenu === "0" ? "없음" : myData.info.firstMenu}
          </InfoFontStyle>
        </li>
        <li>
          <b>메뉴</b>
          <InfoFontStyle>
            {myData.info.treatMenu === "0"
              ? "문의 필요"
              : myData.info.treatMenu}
          </InfoFontStyle>
        </li>
        <li>
          <b>영업시간</b>
          <InfoFontStyle>
            {myData.info.openTime === "0" ? "없음" : myData.info.openTime}
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
          <b>신용카드 가능</b>
          <InfoFontStyle>
            {myData.info.isCreditCard ? "가능" : "불가능"}
          </InfoFontStyle>
        </li>
        <li>
          <b>어린이 놀이방</b>
          <InfoFontStyle>
            {myData.info.kidsFacility ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <b>포장</b>
          <InfoFontStyle>
            {myData.info.packing === "0" ? "문의 필요" : myData.info.packing}
          </InfoFontStyle>
        </li>
        <li>
          <b>문의 및 안내</b>
          <InfoFontStyle>
            {myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default RestaurantDetailInfo;
