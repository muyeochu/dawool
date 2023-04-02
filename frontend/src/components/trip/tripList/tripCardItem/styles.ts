import styled from "styled-components";
import { white, black } from "../../../../styles/Colors";

// icon
import { ReactComponent as likedIc } from "../../../../assets/icon/likedIc.svg";
import { ReactComponent as bathchairIc } from "../../../../assets/icon/bathchairIc.svg";
import { ReactComponent as eyeIc } from "../../../../assets/icon/eyeIc.svg";
import { ReactComponent as earIc } from "../../../../assets/icon/earIc.svg";
import { ReactComponent as oldmanIc } from "../../../../assets/icon/oldmanIc.svg";
import { ReactComponent as toddlerIc } from "../../../../assets/icon/toddlerIc.svg";

export const CardContainer = styled.div`
  width: 196px;
  height: 318px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const ImageContainer = styled.div`
  transition: transform 0.2s ease-in-out;

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

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${ImageContainer}:hover & {
    -webkit-filter: blur(3px);
    filter: blur(3px) brightness(60%);
  }
`;

export const BarrierIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate( -50%, -50% );
  opacity: 0;
  ${ImageContainer}:hover & {
    opacity: 1;
    transition: transform 0.2s ease-in-out;
  }
`;

export const BathchairIcStyle = styled(bathchairIc)``;
export const EyeIcStyle = styled(eyeIc)``;
export const EarIcStyle = styled(earIc)``;
export const OldmanIcStyle = styled(oldmanIc)``;
export const ToddlerIcStyle = styled(toddlerIc)``;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 19px;
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

export const LikedIcStyle = styled(likedIc)`
  /* 크기 바뀌는 문제 해결하기! */
  display: block;
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
