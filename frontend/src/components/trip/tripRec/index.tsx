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
import TripRecCardList from "./tripRecCardList";
import { Link } from "react-scroll";
import { userState } from "../../../recoil/UserState";
import {
  getRecEntertainmentListSelector,
  getRecListSelector,
} from "../../../recoil/RecListSelector";

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
  // 식당&숙박
  // const RecList = useRecoilValue(
  //   getRecListSelector({ recentContentId: 0 })
  //   // getRecListSelector({ recentContentId: recentContentId })
  // );
  // 즐길거리
  const RecList = useRecoilValue(getRecEntertainmentListSelector({contentTypeId:12}))

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
        <TripRecTitle2>BEST {typeText} 👍</TripRecTitle2>
        {/* {user===null} */}
        {/* <TripRecTitle1>예린님!</TripRecTitle1>
        <TripRecTitle2>이런 {typeText}은 어떠세요?</TripRecTitle2> */}
      </TripRecTitleContainer>

      {/* cards */}
      <TripRecCardList/>
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
