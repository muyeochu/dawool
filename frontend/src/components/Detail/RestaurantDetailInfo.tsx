import { InfoBox, InfoMainFontStyle, InfoFontStyle } from "./styles";

const RestaurantDetailInfo = ({ myData }: any) => {
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
          <InfoMainFontStyle>대표메뉴</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.firstMenu === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.firstMenu }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>메뉴</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.treatMenu === "0" ? (
              "문의 필요"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.treatMenu }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>영업시간</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.openTime === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.openTime }}
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
          <InfoMainFontStyle>신용카드 가능</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.isCreditCard ? "가능" : "불가능"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>어린이 놀이방</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.kidsFacility ? "있음" : "없음"}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>포장</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.packing === "0" ? (
              "문의 필요"
            ) : (
              <span dangerouslySetInnerHTML={{ __html: myData.info.packing }} />
            )}
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
      </ul>
    </InfoBox>
  );
};

export default RestaurantDetailInfo;
