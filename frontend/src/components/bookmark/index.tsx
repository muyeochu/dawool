import {
  TripCardListContainer,
  TripListTitle,
  NoBoxContainer,
  NoContainer,
  NonBookmarkImgStyle,
} from "./styles";
import BookmarkCardItem from "./bookmarkItem";
import { BookmarkItemType } from "../../types/BookmarkItemTypes";

interface BookmarkProps {
  contents: BookmarkItemType[];
}

export const BookmarkList = ({ contents }: BookmarkProps) => {
  return (
    <>
      <TripListTitle>관심 여행지</TripListTitle>
      <TripCardListContainer>
        {contents.length > 0 ? (
          <>
            {contents.map((item: BookmarkItemType) => (
              <BookmarkCardItem contents={item} />
            ))}
          </>
        ) : (
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
