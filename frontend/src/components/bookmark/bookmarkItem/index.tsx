import { useRecoilState } from "recoil";
import { userState } from "../../../recoil/UserState";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardBottomContainer,
  CardText,
  LikedIcStyle,
  HeartIcStyle,
} from "./styles";
import exampleImg from "../../../assets/images/exampleImg.png";
import { useNavigate } from "react-router";
import { BookmarkItemType } from "../../../types/BookmarkItemTypes";

interface BookmarkProps {
  contents: BookmarkItemType;
}

function BookmarkCardItem({ contents }: BookmarkProps) {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const handleClick = () => {
    // 로그인한 경우 -> 최근 본 관광지 contentId를 local에 저장
    if (user.accessToken !== "") {
      localStorage.setItem("recentContentId", contents.contentId.toString());
    }

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
        {contents.imageUrl === "0" ? (
          <CardImage src={exampleImg} alt={"대표 이미지"} />
        ) : (
          <CardImage src={contents.imageUrl} alt={"대표 이미지"} />
        )}
      </ImageContainer>
      <CardBottomContainer>
        <CardText onClick={handleClick}>{contents.title}</CardText>
        {contents.liked ? <HeartIcStyle /> : <LikedIcStyle />}
      </CardBottomContainer>
    </CardContainer>
  );
}

export default BookmarkCardItem;
