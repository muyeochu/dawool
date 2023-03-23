import React, {useState} from 'react';
// import { RecoilRoot } from "recoil";
import Button from '../components/common/Button/index';

const TourSpotPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <h1>관광지 페이지입니다.</h1>
      <h1>관광지 페이지입니다.</h1>

      {/* 무장애 필터 button */}
      <Button onClick={handleClick} icType={"bathchair"}>
        지체장애
      </Button>
      <Button onClick={handleClick} icType={"eye"}>
        시각장애
      </Button>
      <Button onClick={handleClick} icType={"ear"}>
        청각장애
      </Button>
      <Button onClick={handleClick} icType={"oldman"}>
        노인
      </Button>
      <Button onClick={handleClick} icType={"toddler"}>
        영유아
      </Button>

    </div>
  );
};

export default TourSpotPage;
