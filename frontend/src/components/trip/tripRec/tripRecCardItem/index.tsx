import {
  RecCardContainer,
  RecImageContainer,
  RecCardImage,
  RecCardTitleContainer,
  RecCardAreaContainer,
} from "./styles";
import exampleImg from "../../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";
import { recommendListType } from "../../../../types/recListTypes";
import { useRecoilValue } from "recoil";
import { citiesState } from "../../../../recoil/RegionState";

interface TripRecCardItemProps {
  item: recommendListType;
}

const TripRecCardItem = ({ item }: TripRecCardItemProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const cities = useRecoilValue(citiesState);
  // cities 배열에서 해당 id의 name을 가져옴
  const areaName = cities.find((city) => city.id === item.areaCode)?.name;
  // console.log("item=", item);

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
        <RecCardImage
          src={item.imageUrl === "0" ? exampleImg : item.imageUrl}
          alt={"대표 이미지"}
          effect="blur"
        />
        <RecCardTitleContainer>{item.title}</RecCardTitleContainer>
        <RecCardAreaContainer>#{areaName}</RecCardAreaContainer>
      </RecImageContainer>
    </RecCardContainer>
  );
};

export default TripRecCardItem;
