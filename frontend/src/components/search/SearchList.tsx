import { WordTypes } from "../../types/wordTypes";

const SearchList = ({ word }: WordTypes) => {
  return <h2>{word}에 대한 검색 결과입니다.</h2>;
};

export default SearchList;
