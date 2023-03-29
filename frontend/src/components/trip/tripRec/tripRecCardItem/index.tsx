import React from "react";
import { RecCardContainer, RecImageContainer, RecCardImage } from "./styles";
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
  const [user, setUser] = useRecoilState(userState);
  console.log("item!", item.contentid)

  const handleClick = () => {
    if (user.accessToken !== "" && item.contenttypeid in [12, 14, 28, 32, 38]) {
      localStorage.setItem("recentContentId", item.contentid.toString());
    }

    switch (item.contenttypeid) {
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
      </RecImageContainer>
    </RecCardContainer>
  );
};

export default TripRecCardItem;
