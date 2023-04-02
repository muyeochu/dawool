import { TripCardListContainer, TripListTitle } from "./styles";
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
        {contents.map((item: BookmarkItemType) => (
          <BookmarkCardItem contents={item} />
        ))}
      </TripCardListContainer>
    </>
  );
};
