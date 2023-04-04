import { useRecoilState } from "recoil";
import { fifthState } from "../../../../../recoil/SurveyState";
import {
  CardListContainer,
  CardContainer,
  CardImage,
  CardText,
} from "./styles";

// card 이미지
const cards = [
  {
    id: 126078,
    image: "http://tong.visitkorea.or.kr/cms2/website/11/2669611.jpg",
    text: "광안리해수욕장",
  },
  {
    id: 126508,
    image: "http://tong.visitkorea.or.kr/cms2/website/22/2029222.jpg",
    text: "경복궁",
  },
  {
    id: 129703,
    image:
      "https://a.cdn-hotels.com/gdcs/production110/d812/7a64317f-72f2-4c1e-9ca2-b735b72e2f27.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    text: "국립중앙박물관",
  },
  {
    id: 2782788,
    image:
      "https://deptmapp.shinsegae.com/resources/site/img/store/cns/detail/img_daejun_etc_1_2.jpg",
    text: "대전 엑스포 아쿠아리움",
  },
  {
    id: 762653,
    image:
      "https://gocamping.or.kr/upload/camp/2616/thumb/thumb_720_97630gihorciocn2d41R0gyX.jpg",
    text: "자라섬오토캠핑장",
  },
  {
    id: 1945438,
    image:
      "https://www.samcheok.go.kr/CmsMultiFile/view.do?multifileId=TT00000020&idx=209",
    text: "삼척 해양레일바이크",
  },
  {
    id: 2708109,
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/guest/image/FogoI_H9Gea1rJJxdN24-b8e9C8.jpg",
    text: "더현대 서울",
  },
  {
    id: 132183,
    image:
      "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7S1n/image/2eiWb25TVZ-Ddj3nMdB0OQ5koc8.jpg",
    text: "광장시장",
  },
];

const OptionCards = () => {
  const [fifthSurvey, setFifthSurvey] = useRecoilState(fifthState);
  // console.log("다섯번째", fifthSurvey)

  const handleCardClick = (id: number) => {
    // fifthState 상태 업데이트
    setFifthSurvey((prevFifthSurvey) => {
      if (prevFifthSurvey.includes(id)) {
        return prevFifthSurvey.filter(
          (selectedCardId) => selectedCardId !== id
        );
      } else {
        return [...prevFifthSurvey, id];
      }
    });
  };

  return (
    <CardListContainer>
      {cards.map((card) => (
        <CardContainer
          key={card.id}
          onClick={() => handleCardClick(card.id)}
          isSelected={fifthSurvey.includes(card.id)}
        >
          <CardImage src={card.image} />
          <CardText>{card.text}</CardText>
        </CardContainer>
      ))}
    </CardListContainer>
  );
};

export default OptionCards;
