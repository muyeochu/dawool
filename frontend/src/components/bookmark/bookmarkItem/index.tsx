import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  BarrierIconContainer,
  BathchairIcStyle,
  EyeIcStyle,
  EarIcStyle,
  OldmanIcStyle,
  ToddlerIcStyle,
  CategoryText,
} from "../../trip/tripList/tripCardItem/styles";
import exampleImg from "../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";
import { BookmarkItemType } from "../../../types/BookmarkTypes";

interface BookmarkProps {
  contents: BookmarkItemType;
}

function BookmarkCardItem({ contents }: BookmarkProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (contents.contentTypeId) {
      case 39:
        navigate(`/detail/restaurant/${contents.contentId}`);
        break;
      case 32:
        navigate(`/detail/accommodation/${contents.contentId}`);
        break;
      case 12:
        navigate(`/detail/tourspot/${contents.contentId}`);
        break;
      case 14:
        navigate(`/detail/culture/${contents.contentId}`);
        break;
      case 28:
        navigate(`/detail/leports/${contents.contentId}`);
        break;
      case 38:
        navigate(`/detail/shopping/${contents.contentId}`);
        break;
      default:
        break;
    }
  };

  return (
    <CardContainer>
      <ImageContainer onClick={handleClick}>
        <CardImage
          src={contents.imageUrl === "0" ? exampleImg : contents.imageUrl}
          alt={"대표 이미지"}
          effect="blur"
        />
        <BarrierIconContainer>
          {contents.mobilityWeak ? <BathchairIcStyle /> : null}
          {contents.visuallyImpaired ? <EyeIcStyle /> : null}
          {contents.deaf ? <EarIcStyle /> : null}
          {contents.old ? <OldmanIcStyle /> : null}
          {contents.infant ? <ToddlerIcStyle /> : null}
        </BarrierIconContainer>
        <CategoryText>#{contents.category}</CategoryText>
      </ImageContainer>
      <CardBottomContainer>
        <CardText onClick={handleClick}>{contents.title}</CardText>
      </CardBottomContainer>
    </CardContainer>
  );
}

export default BookmarkCardItem;
