import React, { useState, useEffect } from "react";
import {
  CardListContainer,
  CardContainer,
  CardImage,
  CardText,
} from "./styles";
import { blue } from "../../../../../styles/Colors";

// 임시 이미지
import enterImg from "../../../../../assets/images/surveyImg.png";

// 임시 데이터
const cards = [
  {
    id: 1,
    image: enterImg,
    text: "광안리해수욕장",
  },
  {
    id: 2,
    image: enterImg,
    text: "대구 근대골목(근대로의 여행)",
  },
  {
    id: 3,
    image: enterImg,
    text: "국립현대미술관(서울관)",
  },
  {
    id: 4,
    image: enterImg,
    text: "근현대사기념관",
  },
  {
    id: 5,
    image: enterImg,
    text: "대전 엑스포 아쿠아리움",
  },
  {
    id: 6,
    image: enterImg,
    text: "여의도 둘레길(여의도 자전거도로)",
  },
  {
    id: 7,
    image: enterImg,
    text: "삼척 해양레일바이크",
  },
  {
    id: 8,
    image: enterImg,
    text: "자라섬오토캠핑장",
  },
];

const OptionCards = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.includes(id)) {
        return prevSelectedCards.filter(
          (selectedCardId) => selectedCardId !== id
        );
      } else {
        return [...prevSelectedCards, id];
      }
    });
  };

  return (
    <CardListContainer>
      {cards.map((card) => (
        <CardContainer key={card.id} onClick={() => handleCardClick(card.id)}
        isSelected={selectedCards.includes(card.id)}>
          <CardImage src={card.image} />
          <CardText>{card.text}</CardText>
        </CardContainer>
      ))}
    </CardListContainer>
  );
};

export default OptionCards;
