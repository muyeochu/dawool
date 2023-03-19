import styled from "styled-components";

import { blue, grey } from "../../styles/Colors";
import { ReactComponent as CloseIc } from "../../assets/icon/closeIc.svg";
import { ReactComponent as LogoIc } from "../../assets/icon/logoIc.svg";
import { ReactComponent as PersonIc } from "../../assets/icon/personIc.svg";
import { ReactComponent as SurveyIc } from "../../assets/icon/surveyIc.svg";
import { ReactComponent as MapIc } from "../../assets/icon/mapIc.svg";
import { ReactComponent as InterestIc } from "../../assets/icon/interestIc.svg";
import { ReactComponent as LogoutIc } from "../../assets/icon/logoutIc.svg";

// 마이페이지 뒷 화면을 어둡게 함
export const MyPageDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarStyle = styled.div`
  position: absolute;
  width: 330px;
  height: 100%;
  right: 0%;
  top: 0px;

  background: ${grey[50]};
  border-radius: 10px 0px 0px 10px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 70px;
`;

export const CloseBtnStyle = styled(CloseIc)`
  float: right;
  width: 18px;
  height: 18px;

  margin-top: 20px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const LogoIcStyle = styled(LogoIc)`
  width: 85px;
  height: 67px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 50px;
`;

export const PersonIcStyle = styled(PersonIc)`
  width: 40px;
  height: 40px;
`;

export const UserFontStyle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

export const LineStyle = styled.div`
  width: 240px;
  border: 1.5px solid rgba(0, 59, 84, 0.34);
  margin-left: 15px;
  margin-top: 20px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 330px;
  gap: 10px;
`;

export const IconMenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  height: 50px;
  gap: 10px;
  padding-left: 50px;

  &:hover {
    cursor: pointer;
    background-color: ${blue[100]};
  }
`;

export const SurveyIcStyle = styled(SurveyIc)`
  width: 20px;
  height: 20px;
  fill: ${grey[500]};
`;

export const MapIcStyle = styled(MapIc)`
  width: 20px;
  height: 20px;
  fill: ${grey[500]};
`;

export const InterestIcStyle = styled(InterestIc)`
  width: 20px;
  height: 20px;
  fill: ${grey[500]};
`;

export const MenuFont = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${grey[500]};
`;

export const LogoutIcStyle = styled(LogoutIc)`
  width: 20px;
  height: 20px;
  fill: ${grey[500]};
`;

export const LogoutContainer = styled.div`
  margin-top: 230px;

  &:hover {
    cursor: pointer;
  }
`;
