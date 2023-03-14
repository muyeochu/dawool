import React, {useState} from 'react';
import { RecoilRoot } from "recoil";
import Button from '../components/common/Button/index';

// icon
import eyeIc from '../assets/icon/eyeIc.svg';
import bathchairIc from '../assets/icon/bathchairIc.svg';
import earIc from '../assets/icon/earIc.svg';
import oldmanIc from '../assets/icon/oldmanIc.svg';
import toddlerIc from '../assets/icon/toddlerIc.svg';


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
      <Button onClick={handleClick} imageSrc={bathchairIc}>
        지체장애
      </Button>
      <Button onClick={handleClick} imageSrc={eyeIc}>
        시각장애
      </Button>
      <Button onClick={handleClick} imageSrc={earIc}>
        청각장애
      </Button>
      <Button onClick={handleClick} imageSrc={oldmanIc}>
        노인
      </Button>
      <Button onClick={handleClick} imageSrc={toddlerIc}>
        영유아
      </Button>

    </div>
  );
};

export default TourSpotPage;
