import React, { useState, useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { searchState, getSearchSelector } from "../../recoil/SearchSelector";

import { TitleContainer, SerachIcStyle, ButtonList } from "./styles";
import Button from "../common/Button";

interface WordTypes {
  word: string;
}

const SearchList = ({ word }: WordTypes) => {
  const [isClicked, setIsClicked] = useState<boolean>(false); // 버튼 클릭 여부
  const [searchValue, setSearchValue] = useRecoilState(searchState);

  const refs = {
    0: React.useRef<HTMLButtonElement>(null),
    1: React.useRef<HTMLButtonElement>(null),
    2: React.useRef<HTMLButtonElement>(null),
    3: React.useRef<HTMLButtonElement>(null),
    4: React.useRef<HTMLButtonElement>(null),
  };

  let selectedBtn = searchValue.barrier.split("");
  console.log("선택된 버튼은?", selectedBtn);
  const handleClick = () => {
    setIsClicked((prev) => !prev);

    let selectedBtn = searchValue.barrier;
    console.log("선택된 버튼은?", selectedBtn);

    setSearchValue({ ...searchValue, barrier: selectedBtn });
  };

  return (
    <>
      <TitleContainer>
        <SerachIcStyle />
        <span className="keyword">{word}</span>
        <span>검색결과</span>
      </TitleContainer>
      <ButtonList>
        <Button onClick={handleClick} icType={"bathchair"} ref={refs[0]}>
          지체장애
        </Button>
        <Button onClick={handleClick} icType={"eye"} ref={refs[1]}>
          시각장애
        </Button>
        <Button onClick={handleClick} icType={"ear"} ref={refs[2]}>
          청각장애
        </Button>
        <Button onClick={handleClick} icType={"oldman"} ref={refs[3]}>
          노인
        </Button>
        <Button onClick={handleClick} icType={"toddler"} ref={refs[4]}>
          영유아
        </Button>
      </ButtonList>
    </>
  );
};

export default SearchList;
