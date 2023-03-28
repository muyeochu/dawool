import React from "react";
import {
  TripRecContainer,
  TripRecTitleContainer,
  TripRecTitle1,
  TripRecTitle2,
  RecDonwArrowIcContainer,
  RecDonwArrowIcStyle,
} from "./styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { TripListTitleType } from "../../../types/tripListTypes";
// import TripRecCardList from "./tripRecCardList";
import { Link } from "react-scroll";
import { userState } from "../../../recoil/UserState";
import { getRecListSelector } from "../../../recoil/RecListSelector";

export interface TripRecProps {
  titleType: TripListTitleType["titleType"];
}

function TripRec({ titleType }: TripRecProps) {
  // 유저 정보 가져오기
  const [user, setUser] = useRecoilState(userState);

  // 추천 data 가져오기
  const recentContentId = parseInt(
    localStorage.getItem("recentContentId") || "0"
  );
  const RecList = useRecoilValue(
    getRecListSelector({ recentContentId: recentContentId })
  );

  console.log("추천목록", RecList);

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

  return (
    <TripRecContainer>
      {/* title */}
      <TripRecTitleContainer>
        {/* {user===null} */}
        <TripRecTitle1>예린님!</TripRecTitle1>
        <TripRecTitle2>이런 {typeText}은 어떠세요?</TripRecTitle2>
      </TripRecTitleContainer>

      {/* cards */}
      {/* {RecList && <TripRecCardList RecList={RecList}/>} */}
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
