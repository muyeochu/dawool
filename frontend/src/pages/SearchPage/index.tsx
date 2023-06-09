import { useEffect, useState, useRef, Suspense } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../../components/common/Loading";
import SearchList from "../../components/search/index";

import { useRecoilState } from "recoil";
import { getSearchApi } from "../../recoil/Api";
import { searchState } from "../../recoil/SearchSelector";

import {
  MainGridItems,
  RowGridContainer,
  RowGridItems,
  EndBlock,
} from "./styles";

const SearchPage = () => {
  const location = useLocation();
  const word: string = location.state;
  const pageEnd: any = useRef();

  const [searchStateValue, setSearchStateValue] = useRecoilState(searchState); // 무장애 태그 상태
  const [searchData, setSearchData] = useState([]); // 받아온 데이터를 저장
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prevPage, setPrevPage] = useState(0); // 이전 페이지 상태를 저장
  const [prevBarrier, setPrevBarrier] = useState("00000"); // 이전 버튼 상태를 저장

  // 새로고침 할때마다 searchState 값 초기화 필요
  useEffect(() => {
    setSearchStateValue({ ...searchStateValue, title: word, barrier: "00000" });
    setSearchData([]);
  }, []);

  // 무장애 버튼 클릭할때마다 Page 초기화
  useEffect(() => {
    if (prevBarrier !== searchStateValue.barrier) {
      setPage(0);
      setPrevPage(0);
      setPrevBarrier(searchStateValue.barrier);
    }
  }, [searchStateValue.barrier]);

  const getSearchDatas = async (page: number) => {
    const searchQuery = {
      title: word,
      type: 0,
      barrier: searchStateValue.barrier,
      page: page,
      size: 10,
    };
    const res = await getSearchApi(searchQuery);
    const data = await res.data.contents;

    if (data === "No Content") {
      if (page === 0) {
        setSearchData(data); // 검색결과가 없는 경우
      }
    } else {
      // 페이지가 이동시에만 무한스크롤 구현(버튼 무한스크롤x)
      if (page > prevPage) {
        setSearchData((prev) => [...prev, ...data] as any);
        setPrevPage(page);
      } else {
        setSearchData(data);
      }
    }

    setLoading(true);
  };

  useEffect(() => {
    getSearchDatas(page);
  }, [page, searchStateValue, word]);

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
      <MainGridItems>
        <RowGridContainer>
          <RowGridItems>
            <Suspense fallback={<Loading />}>
              <SearchList word={word} data={searchData} />
            </Suspense>
          </RowGridItems>
        </RowGridContainer>
        <EndBlock ref={pageEnd}></EndBlock>
      </MainGridItems>
    </>
  );
};

export default SearchPage;
