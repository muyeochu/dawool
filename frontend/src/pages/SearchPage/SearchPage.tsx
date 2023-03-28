import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchList from "../../components/search/index";

import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { searchState, getSearchSelector } from "../../recoil/SearchSelector";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";

const SearchPage = () => {
  const location = useLocation();
  const word: string = location.state;
  // const searchInput = useRecoilValue(searchState); // recoil 확인용(삭제)
  const [searchStateValue, setSearchStateValue] = useRecoilState(searchState);

  // 새로고침 할때마다 searchState 값 초기화 필요
  useEffect(() => {
    setSearchStateValue({ ...searchStateValue, title: word, barrier: "00000" });
  }, [searchStateValue.title]);

  const searchData = useRecoilValue(
    getSearchSelector({
      title: word,
      type: 0,
      barrier: searchStateValue.barrier,
      page: 0,
      size: 10,
    })
  );

  console.log("데이터좀..", searchData);

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          <SearchList word={word} data={searchData} />
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default SearchPage;
