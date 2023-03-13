import React from 'react';
import Button from '../components/common/Button/index';
import logo from '../assets/icon/eyeIc.svg';

const TourSpotPage = () => {
  return (
    <div>
      <h1>관광지 페이지입니다.</h1>
      <h1>관광지 페이지입니다.</h1>
      <Button onClick={() => alert("with image clicked")} imageSrc={logo}>
        시각장애
      </Button>
    </div>
  );
};

export default TourSpotPage;
