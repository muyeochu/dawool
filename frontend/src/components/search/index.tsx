import React, { useState, useCallback, useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { searchState, getSearchSelector } from "../../recoil/SearchSelector";

import {
  TitleContainer,
  SerachIcStyle,
  ButtonList,
  TripCardListContainer,
  NonDataContainer,
} from "./styles";
import Button from "../common/Button";

import TripCardItem from "../trip/tripList/tripCardItem";
import { ListType } from "../../types/tripListTypes";

interface PropTypes {
  word: string;
  data: any;
}

const SearchList = ({ word, data }: PropTypes) => {
  const checkSearchValue = useRecoilValue(searchState);

  console.log("SearchList의 데이터", data);

  const buttons = [
    { id: 0, label: "지체장애인", icType: "bathchair", btType: 0 },
    { id: 1, label: "시각장애인", icType: "eye", btType: 0 },
    { id: 2, label: "청각장애인", icType: "ear", btType: 0 },
    { id: 3, label: "노인", icType: "oldman", btType: 0 },
    { id: 4, label: "영유아", icType: "toddler", btType: 0 },
  ];

  console.log("search값은?", checkSearchValue);

  return (
    <>
      <TitleContainer>
        <SerachIcStyle />
        <span className="keyword">{word}</span>
        <span>검색결과</span>
      </TitleContainer>
      {data.contents.length >= 1 ? (
        <>
          <ButtonList>
            {buttons.map(({ id, label, icType, btType }) => (
              <Button key={id} id={id} icType={icType} btType={btType}>
                {label}
              </Button>
            ))}
          </ButtonList>
          <TripCardListContainer>
            {data.contents.map((item: ListType) => (
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
          </NonDataContainer>
        </>
      )}
    </>
  );
};

export default SearchList;
