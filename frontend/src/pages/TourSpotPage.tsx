import React, {useState} from 'react';
import { RecoilRoot } from "recoil";
import Button from '../components/common/Button/index';
// import {ReactComponent as EyeIc} from '../assets/icon/eyeIc.svg';
import eyeIc from '../assets/icon/eyeIc.svg';

const TourSpotPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <h1>관광지 페이지입니다.</h1>
      <h1>관광지 페이지입니다.</h1>
      <Button onClick={handleClick} imageSrc={eyeIc}>
        시각장애
      </Button>
    </div>
  );
};

export default TourSpotPage;
