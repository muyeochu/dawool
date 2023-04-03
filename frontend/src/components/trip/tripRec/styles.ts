import styled, { keyframes } from "styled-components";
import { mainColor, white, grey, blue, black } from "../../../styles/Colors";
import { ReactComponent as DownArrowIc } from "../../../assets/icon/downarrowIc.svg";
import { ReactComponent as InformationIc } from "../../../assets/icon/informationIc.svg";

export const bounce = keyframes`
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
  padding: 150px 184px;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #dfe3f2,
    #b6cbe5,
    #83b5d5,
    #3fa0bf
  );
  background-size: cover;
`;

export const TripRecTitleContainer = styled.div`
  text-align: left;
  font-family: "SUIT";
  margin-bottom: 55px;
`;

export const TripRecTitle1 = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  color: ${black};
`;

export const ThumbsUpStyle = styled.div`
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const TripRecTitle2 = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 45px;
  color: ${black};
`;

export const TripRecTitle3Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const InformationIcStyle = styled(InformationIc)`
  width: 20px;
  height: 20px;
  fill: ${grey[500]};
`;

export const TripRecTitle3 = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* line-height: 30px; */
  color: ${grey[500]};
`;

export const TripRecCardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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
