import { useLocation } from "react-router-dom";
import SearchList from "../../components/search/index";

import { useRecoilValue } from "recoil";
import { searchState, getSearchSelector } from "../../recoil/SearchSelector";

import { MainGridItems, RowGridContainer, RowGridItems } from "./styles";


const SearchPage = () => {
  const location = useLocation();
  const word: string = location.state;
  const searchInput = useRecoilValue(searchState);

  console.log("검색어는?", searchInput);

  const searchData = useRecoilValue(
    getSearchSelector({
      title: word,
      type: 0,
      barrier: "00000",
      page: 0,
      size: 20,
    })
  );

  console.log("데이터는?", searchData);

  return (
    <MainGridItems>
      <RowGridContainer>
        <RowGridItems>
          <SearchList word={word} />
        </RowGridItems>
      </RowGridContainer>
    </MainGridItems>
  );
};

export default SearchPage;
