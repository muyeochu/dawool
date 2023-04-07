import {
  TripRecContainer,
  TripRecTitleContainer,
  TripRecTitle1,
  ThumbsUpStyle,
  TripRecTitle2,
  TripRecTitle3Container,
  InformationIcStyle,
  TripRecTitle3,
  TripRecCardListContainer,
  RecDonwArrowIcContainer,
  RecDonwArrowIcStyle,
} from "./styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { TripListTitleType } from "../../../types/tripListTypes";
import TripRecCardItem from "./tripRecCardItem";
import { Link } from "react-scroll";
import { userState } from "../../../recoil/UserState";
import {
  getRecEntertainmentSelector,
  getRecEtcSelector,
} from "../../../recoil/RecListSelector";
import { recommendListType } from "../../../types/recListTypes";

export interface TripRecProps {
  titleType: TripListTitleType["titleType"];
}

function TripRec({ titleType }: TripRecProps) {
  const token = localStorage.getItem("token");
  const [user, setUser] = useRecoilState(userState); // 유저 정보
  const recentContentId = parseInt(
    localStorage.getItem("recentContentId") || "0"
  );


  const typeText =
    titleType === "restaurant"
      ? "식당"
      : titleType === "accommodation"
      ? "숙박"
      : titleType === "tourSpot"
      ? "관광지"
      : titleType === "culture"
      ? "문화시설"
      : titleType === "leports"
      ? "레포츠"
      : titleType === "shopping"
      ? "쇼핑"
      : "기타";

  const linkGrammar1 = ["tourSpot", "leports"].includes(titleType)
    ? "를"
    : "을";

  const linkGrammar2 = ["tourSpot", "leports"].includes(titleType)
    ? "는"
    : "은";

  // 즐길거리 contentTypeId
  const contentTypeId =
    titleType === "restaurant"
      ? 39
      : titleType === "accommodation"
      ? 32
      : titleType === "tourSpot"
      ? 12
      : titleType === "culture"
      ? 14
      : titleType === "leports"
      ? 28
      : titleType === "shopping"
      ? 38
      : 0;

  // 식당 or 숙박 구별
  const recTitle =
    titleType === "restaurant"
      ? "restaurant"
      : titleType === "accommodation"
      ? "stay"
      : "";

  // 즐길거리 or (식당&숙박) selector 호출
  const selectorPick = [12, 14, 28, 38].includes(contentTypeId)
    ? getRecEntertainmentSelector({ titleType, contentTypeId: contentTypeId })
    : getRecEtcSelector({
        titleType: recTitle,
        recentContentId: recentContentId,
      });
  const RecList = useRecoilValue(selectorPick);

  return (
    <TripRecContainer>
      {/* title */}
      <TripRecTitleContainer>
        {token === null ? (
          <>
            <TripRecTitle1>
              BEST {typeText} <ThumbsUpStyle>👍</ThumbsUpStyle>
            </TripRecTitle1>
            <TripRecTitle2>
              로그인하시면 취향에 맞는 {typeText}
              {linkGrammar1} 추천해드려요!
            </TripRecTitle2>
          </>
        ) : (
          <>
            <TripRecTitle1>{user.nickName}님!</TripRecTitle1>
            <TripRecTitle2>
              이런 {typeText}
              {linkGrammar2} 어떠세요?
            </TripRecTitle2>
            {titleType === "restaurant" || titleType === "accommodation" ? (
              <TripRecTitle3Container>
                <InformationIcStyle />
                <TripRecTitle3>
                  최근 본 여행지 기반으로 추천해드려요!
                </TripRecTitle3>
              </TripRecTitle3Container>
            ) : null}
          </>
        )}
      </TripRecTitleContainer>

      {/* cards */}
      {RecList && (
        <TripRecCardListContainer>
          {RecList.map((item: recommendListType) => (
            <TripRecCardItem key={item.contentId} item={item} />
          ))}
        </TripRecCardListContainer>
      )}

      {/* bottom button */}
      <RecDonwArrowIcContainer>
        <Link to="trip-list-container" smooth={true} duration={500}>
          <RecDonwArrowIcStyle />
        </Link>
      </RecDonwArrowIcContainer>
    </TripRecContainer>
  );
}

export default TripRec;
