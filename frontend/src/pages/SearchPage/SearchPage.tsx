import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import SearchList from "../../components/search/index";

import {
  useRecoilValue,
  useResetRecoilState,
  useRecoilState,
  selectorFamily,
  SerializableParam,
} from "recoil";
import { getSearchApi } from "../../recoil/Api";
import { SearchDataTypes } from "../../types/searchTypes";
// import { searchState, getSearchSelector } from "../../recoil/SearchSelector";
import { searchState } from "../../recoil/SearchSelector";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const SearchPage = () => {
  const location = useLocation();
  const word: string = location.state;
  const pageEnd:any = useRef()

  // const searchInput = useRecoilValue(searchState); // recoil 확인용(삭제)
  const [searchStateValue, setSearchStateValue] = useRecoilState(searchState);
  const searchState2 = useRecoilValue(searchState);
  const [searchDatas, setSearchData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  // 새로고침 할때마다 searchState 값 초기화 필요
  useEffect(() => {
    setSearchStateValue({ ...searchStateValue, title: word, barrier: "00000" });
  }, []);

  // const searchData = getSearchSelector({
  //   title: word,
  //   type: 0,
  //   barrier: searchStateValue.barrier,
  //   page: 0,
  //   size: 10,
  // });

  // axios 그냥 쓴거

  // setSearchStateValue({
  //   ...searchStateValue,
  //   title: word,
  //   type: 0,
  //   page: page,
  //   size: 10,
  // });

  console.log("버튼값 바뀌는지?", searchStateValue);

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

    // setSearchData((prev) => [...prev, ...data] as any);
    if (page > prevPage) {
      setSearchData((prev) => [...prev, ...data] as any);
    } else {
      setSearchData(data);
    }

    setLoading(true);

    console.log("Query는?", searchQuery);
    console.log("fetch 데이터는?", data);
  };

  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    getSearchDatas(page);
  }, [page, searchStateValue]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        entries => {
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

  console.log("Value안쓰면?", searchDatas);

  //////////////////////////////////////////////////////

  // const loadMore = () => {
  // 	setPage(prev => prev + 1);
  // }

  // useEffect(()=> {
  //   loadMore()
  //   console.log("지금 페이지는?", page)
  // },[])

  // const searchData = useRecoilValue(
  //   getSearchSelector({
  //     title: word,
  //     type: 0,
  //     barrier: searchStateValue.barrier,
  //     page: page,
  //     size: 10,
  //   })
  // );

  console.log("데이터좀..", searchDatas);
  console.log("지금 페이지는?", page);

  // 데이터 필터링하기
  

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          {/* <SearchList word={word} data={searchData.contents}/> */}
          <SearchList word={word} data={searchDatas} />
          <h1 ref={pageEnd}>여기가 끝 ㅎㅎ </h1>
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default SearchPage;
