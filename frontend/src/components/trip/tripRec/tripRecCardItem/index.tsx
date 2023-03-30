import React from "react";
import {
  RecCardContainer,
  RecImageContainer,
  RecCardImage,
  RecCardTitleContainer,
} from "./styles";
import exampleImg from "../../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";
import { recommendListType } from "../../../../types/recListTypes";

interface TripRecCardItemProps {
  item: recommendListType;
}

const TripRecCardItem = ({ item }: TripRecCardItemProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("item!", item)

  const handleClick = () => {
    if (token !== null && [12, 14, 28, 38].includes(item.contentTypeId)) {
      localStorage.setItem("recentContentId", item.contentId.toString());
    }

    switch (item.contentTypeId) {
      case 12:
        navigate(`/detail/tourspot/${item.contentId}`);
        break;
      case 14:
        navigate(`/detail/culture/${item.contentId}`);
        break;
      case 28:
        navigate(`/detail/leports/${item.contentId}`);
        break;
      case 38:
        navigate(`/detail/shopping/${item.contentId}`);
        break;
      case 39:
        navigate(`/detail/restaurant/${item.contentId}`);
        break;
      case 32:
        navigate(`/detail/accommodation/${item.contentId}`);
        break;
    }
  };

  return (
    <RecCardContainer>
      <RecImageContainer onClick={handleClick}>
        {item.imageUrl === "0" ? (
          <RecCardImage src={exampleImg} alt={"대표 이미지"} />
        ) : (
          <RecCardImage src={item.imageUrl} alt={"대표 이미지"} />
        )}
        <RecCardTitleContainer>{item.title}</RecCardTitleContainer>
      </RecImageContainer>
    </RecCardContainer>
  );
};

export default TripRecCardItem;
