import React from "react";
import {
  TripRecContainer,
  TripRecTitleContainer,
  TripRecTitle1,
  TripRecTitle2,
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
  // console.log("최근 본 콘텐츠id=", recentContentId);

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
  const selectorPick =
    [12, 14, 28, 38].includes(contentTypeId)
      ? getRecEntertainmentSelector({ titleType, contentTypeId: contentTypeId })
      : getRecEtcSelector({
          titleType: recTitle,
          recentContentId: recentContentId,
        });
  const RecList = useRecoilValue(selectorPick);
  // console.log("추천목록!", RecList);

  return (
    <TripRecContainer>
      {/* title */}
      <TripRecTitleContainer>
        {token !== null ? (
          <>
            <TripRecTitle2>BEST {typeText} 👍</TripRecTitle2>
            <TripRecTitle2>
              로그인하시면 취향에 맞는 {typeText}을 추천해드려요!
            </TripRecTitle2>
          </>
        ) : (
          <>
            <TripRecTitle1>{user.nickName}님!</TripRecTitle1>
            <TripRecTitle2>이런 {typeText}은 어떠세요?</TripRecTitle2>
          </>
        )}
      </TripRecTitleContainer>

      {/* cards */}
      {/* <TripRecCardList /> */}
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
