import { useEffect, useState, useRef } from "react";
import { BookmarkList } from "../../components/bookmark";
import { getBookmarkListApi } from "../../recoil/Api";

import {
  TripListGridItems,
  RowGridContainer,
  RowGridItems,
  EndBlock,
} from "./styles";

const BookmarkPage = () => {
  const pageEnd: any = useRef();

  const [bookmarkData, setBookmarkData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prevPage, setPrevPage] = useState(0);

  const getBookmarkData = async (page: number) => {
    const bookmarkQuery = {
      page: page,
      size: 10,
    };
    const res = await getBookmarkListApi(bookmarkQuery);
    const data = await res.data.contents;

    if (data === "No Content") {
      if (page === 0) {
        setBookmarkData(data); // 검색결과가 없는 경우
      }
    } else {
      // 페이지가 이동시에만 무한스크롤 구현(버튼 무한스크롤x)
      if (page > prevPage) {
        setBookmarkData((prev) => [...prev, ...data] as any);
        setPrevPage(page);
      } else {
        setBookmarkData(data);
      }
    }

    setLoading(true);
  };

  useEffect(() => {
    getBookmarkData(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      //옵져버 탐색 시작
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  return (
    <>
      {/* 북마크 list */}
      <TripListGridItems>
        <RowGridContainer>
          <RowGridItems>
            <BookmarkList contents={bookmarkData} />
          </RowGridItems>
        </RowGridContainer>
        <EndBlock ref={pageEnd} />
      </TripListGridItems>
    </>
  );
};

export default BookmarkPage;
