import { InfoBox, InfoFontStyle } from "./styles";

const ShoppingDetailInfo = ({ myData }: any) => {
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
          <b>장서는날</b>
          <InfoFontStyle>
            {myData.info.fairDay === "0" ? "없음" : myData.info.fairDay}
          </InfoFontStyle>
        </li>
        <li>
          <b>문의 및 안내</b>
          <InfoFontStyle>
            {myData.info.infoCenter === "0" ? "없음" : myData.info.infoCenter}
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
          <b>화장실</b>
          <InfoFontStyle>
            {myData.info.restroom === "0" ? "없음" : myData.info.restroom}
          </InfoFontStyle>
        </li>
        <li>
          <b>판매품목</b>
          <InfoFontStyle>
            {myData.info.saleItem === "0" ? "문의 필요" : myData.info.saleItem}
          </InfoFontStyle>
        </li>
        <li>
          <b>매장안내</b>
          <InfoFontStyle>
            {myData.info.shopGuide === "0" ? "없음" : myData.info.shopGuide}
          </InfoFontStyle>
        </li>
      </ul>
    </InfoBox>
  );
};

export default ShoppingDetailInfo;
