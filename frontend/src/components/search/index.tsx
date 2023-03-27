import { TitleContainer, SerachIcStyle } from "./styles";

interface WordTypes {
  word: string;
}

const SearchList = ({ word }: WordTypes) => {
  return (
    <TitleContainer>
      <SerachIcStyle />
      <span className="keyword">{word}</span>
      <span>검색결과</span>
    </TitleContainer>
  );
};

export default SearchList;
