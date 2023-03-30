import styled from "styled-components";
import { black } from "../../../styles/Colors";
import { ReactComponent as HeartIc } from "../../../assets/icon/heartIc.svg";
import { ReactComponent as likedIc } from "../../../assets/icon/likedIc.svg";

export const CardContainer = styled.div`
  width: 196px;
  height: 318px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const ImageContainer = styled.div`
  width: 196px;
  height: 285px;
  border-radius: 10px;
  filter: drop-shadow(0px 5.40717px 5.40717px rgba(0, 0, 0, 0.4));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 11px;
`;

export const CardText = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${black};
  cursor: pointer;
`;

export const IcContainer = styled.div`
  width: 37px;
  height: 32px;
  cursor: pointer;
`;

export const LikedIcStyle = styled(likedIc)`
 width: 37px;
  height: 32px;
  cursor: pointer;
`;

export const HeartIcStyle = styled(HeartIc)`
  width: 37px;
  height: 32px;
  cursor: pointer;
`;
