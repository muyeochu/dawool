import { InfoBox, InfoMainFontStyle, InfoFontStyle } from "./styles";

const LeportsDetailInfo = ({ myData }: any) => {
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
          <InfoMainFontStyle>개장기간</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.openPeriod === "0" ? (
              "없음"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.openPeriod }}
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
          <InfoMainFontStyle>주차요금</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.parkingFee === "0" ? (
              "문의 필요"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.parkingFee }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>예약안내</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.parkingFee === "0" ? (
              "문의 필요"
            ) : (
              <span
                dangerouslySetInnerHTML={{ __html: myData.info.parkingFee }}
              />
            )}
          </InfoFontStyle>
        </li>
        <li>
          <InfoMainFontStyle>입장료</InfoMainFontStyle>
          <InfoFontStyle>
            {myData.info.useFee === "0" ? (
              "문의 필요"
            ) : (
              <span dangerouslySetInnerHTML={{ __html: myData.info.useFee }} />
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
      </ul>
    </InfoBox>
  );
};

export default LeportsDetailInfo;
