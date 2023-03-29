import { TripListContainer, TripListTitle } from "./styles";
import BookmarkCardItem from "./bookmarkItem";
import { BookmarkItemType } from "../../types/BookmarkItemTypes";

interface BookmarkProps {
  contents: BookmarkItemType[];
}

export const BookmarkList = ({ contents }: BookmarkProps) => {
  return (
    <TripListContainer>
      <TripListTitle>관심 여행지 관리</TripListTitle>
      {contents.map((item: BookmarkItemType) => (
        <BookmarkCardItem contents={item} />
      ))}
    </TripListContainer>
  );
};
