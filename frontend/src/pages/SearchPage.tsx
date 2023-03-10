import { useLocation } from "react-router-dom";
import SearchList from "../components/search/SearchList";

const SearchPage = () => {
  const location = useLocation();
  const word: string = location.state;

  return (
    <div>
      <h1>검색 결과 페이지입니다.</h1>
      <SearchList word={word} />
    </div>
  );
};

export default SearchPage;
