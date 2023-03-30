import React from "react";
import {
  RecCardContainer,
  RecImageContainer,
  RecCardImage,
  RecCardTitleContainer,
} from "./styles";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/UserState";
import exampleImg from "../../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";
import { recommendListType } from "../../../../types/recListTypes";

interface TripRecCardItemProps {
  item: recommendListType;
}

const TripRecCardItem = ({ item }: TripRecCardItemProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleClick = () => {
    if (token !== null && [12, 14, 28, 32, 38].includes(item.contenttypeid)) {
      localStorage.setItem("recentContentId", item.contentid.toString());
    }

    switch (item.contenttypeid) {
      case 12:
        navigate(`/detail/tourspot/${item.contentid}`);
        break;
      case 14:
        navigate(`/detail/culture/${item.contentid}`);
        break;
      case 28:
        navigate(`/detail/leports/${item.contentid}`);
        break;
      case 38:
        navigate(`/detail/shopping/${item.contentid}`);
        break;
      case 39:
        navigate(`/detail/restaurant/${item.contentid}`);
        break;
      case 32:
        navigate(`/detail/accommodation/${item.contentid}`);
        break;
    }
  };

  return (
    <RecCardContainer>
      <RecImageContainer onClick={handleClick}>
        {item.firstimage === "0" ? (
          <RecCardImage src={exampleImg} alt={"대표 이미지"} />
        ) : (
          <RecCardImage src={item.firstimage} alt={"대표 이미지"} />
        )}
        <RecCardTitleContainer>{item.title}</RecCardTitleContainer>
      </RecImageContainer>
    </RecCardContainer>
  );
};

export default TripRecCardItem;
