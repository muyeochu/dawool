import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { BookmarkList } from "../components/bookmark";
import { bookmarkList } from "../recoil/BookmarkSelector";

const TripListGridItems = styled.div`
  grid-column: 2 / span 1;
`;

export const RowGridContainer = styled.div`
  display: grid;
  grid-template-rows: 110px auto 110px;
  width: 100%;
  height: 100%;
`;

export const RowGridItems = styled.div`
  grid-row: 2 / span 1;
`;

const BookmarkPage = () => {
  const list = useRecoilValue(bookmarkList({ page: 0, size: 10 }));
  return (
    <>
      {/* 북마크 list */}
      <TripListGridItems>
        <RowGridContainer>
          <RowGridItems>
            <BookmarkList contents={list} />
          </RowGridItems>
        </RowGridContainer>
      </TripListGridItems>
    </>
  );
};

export default BookmarkPage;
