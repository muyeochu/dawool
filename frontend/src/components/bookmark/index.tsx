import {
  TripCardListContainer,
  TripListTitle,
  ExpTitleStyle,
  BookMarkPgIcStyle,
  NoBoxContainer,
  NoContainer,
  NonBookmarkImgStyle,
} from "./styles";
import BookmarkCardItem from "./bookmarkItem";
import { BookmarkItemType } from "../../types/BookmarkItemTypes";

interface BookmarkProps {
  contents: any;
}

export const BookmarkList = ({ contents }: BookmarkProps) => {
  // 통신 후 데이터가 없는지 판별함
  // noData = "no" 는 초기값인 빈 배열인 상태도 포함되어있다.
  const noData = contents === "No Content" ? "yes" : "no";

  return (
    <>
      <TripListTitle>
        <BookMarkPgIcStyle />
        <p>관심 여행지</p>
      </TripListTitle>
      <ExpTitleStyle>관심있는 여행지를 한 눈에 확인하세요.</ExpTitleStyle>
      <TripCardListContainer>
        {noData === "no" && contents.length >= 1 && (
          <>
            {contents.map((item: BookmarkItemType) => (
              <BookmarkCardItem key={item.contentId} contents={item} />
            ))}
          </>
        )}
        {noData === "yes" && (
          <NoBoxContainer>
            <NoContainer>
              <NonBookmarkImgStyle />
              <p>관심 여행지가 없습니다.</p>
            </NoContainer>
          </NoBoxContainer>
        )}
      </TripCardListContainer>
    </>
  );
};
