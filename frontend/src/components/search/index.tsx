import {
  TitleContainer,
  SerachIcStyle,
  ButtonList,
  TripCardListContainer,
  NonDataContainer,
  NonSearchImgStyle,
} from "./styles";
import Button from "../common/Button";

import TripCardItem from "../trip/tripList/tripCardItem";
import { ListType } from "../../types/tripListTypes";

interface PropTypes {
  word: string;
  data: any;
}

const SearchList = ({ word, data }: PropTypes) => {
  const buttons = [
    { id: 0, label: "지체장애인", icType: "bathchair", btType: 0 },
    { id: 1, label: "시각장애인", icType: "eye", btType: 0 },
    { id: 2, label: "청각장애인", icType: "ear", btType: 0 },
    { id: 3, label: "노인", icType: "oldman", btType: 0 },
    { id: 4, label: "영유아", icType: "toddler", btType: 0 },
  ];

  if (data === "[]") {
    console.log("비엇지롱");
  }

  return (
    <>
      <TitleContainer>
        <SerachIcStyle />
        <span className="keyword">{word}</span>
        <span>검색결과</span>
      </TitleContainer>
      {data.length >= 1 ? (
        <>
          <ButtonList>
            {buttons.map(({ id, label, icType, btType }) => (
              <Button key={id} id={id} icType={icType} btType={btType}>
                {label}
              </Button>
            ))}
          </ButtonList>
          <TripCardListContainer>
            {data.map((item: ListType) => (
              <TripCardItem
                type="search"
                key={item.contentId}
                contents={item}
              />
            ))}
          </TripCardListContainer>
        </>
      ) : (
        <>
          <NonDataContainer>
            <p>검색 결과가 없습니다.</p>
            <NonSearchImgStyle />
          </NonDataContainer>
        </>
      )}
    </>
  );
};

export default SearchList;
