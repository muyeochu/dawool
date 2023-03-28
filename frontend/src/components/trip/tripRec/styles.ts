import styled, {keyframes} from "styled-components";
import { mainColor, white, grey, blue, black } from "../../../styles/Colors";
import RecBackgroundImg from "../../../assets/images/recBackgroundImg.png"
import { ReactComponent as DownArrowIc } from "../../../assets/icon/downarrowIc.svg";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const TripRecContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  position: relative;
  height: 92vh;
  width: 100vw;
  background-image: url(${RecBackgroundImg});
  background-size: cover;
`;

export const TripRecTitleContainer = styled.div`
  
  text-align: left;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 56px;
  color: ${black};
`;

export const TripRecTitle1 = styled.div`
  display: flex;
  align-items: center;
`;

export const TripRecTitle2 = styled.div`
  display: flex;
  align-items: center;
`;

export const RecDonwArrowIcContainer = styled.div`
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const RecDonwArrowIcStyle = styled(DownArrowIc)`
  transition: transform 0.2s ease-in-out;

  animation: ${bounce} 1s linear infinite;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    animation: none;
  }
`;