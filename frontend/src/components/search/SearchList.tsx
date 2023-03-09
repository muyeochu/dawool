// props의 타입을 지정해줌
interface WordProps {
  word: string;
}

const SearchList = ({ word }: WordProps) => {
  return <h2>{word}에 대한 검색 결과입니다.</h2>;
};

export default SearchList;
