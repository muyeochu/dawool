import { useNavigate } from "react-router-dom";
import {userState} from "../../recoil/UserState"
import {useRecoilState } from "recoil";

import {
  MyPageDimmer,
  SidebarStyle,
  CloseBtnStyle,
  SidebarContainer,
  LogoIcStyle,
  UserContainer,
  PersonIcStyle,
  UserFontStyle,
  LineStyle,
  MenuContainer,
  IconMenuContainer,
  SurveyIcStyle,
  MapIcStyle,
  InterestIcStyle,
  LogoutIcStyle,
  MenuFont,
  LogoutContainer,
} from "./styles";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
}

const SideBar = ({ isOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  // 사이드바 닫기
  const closeSideBar = () => {
    setIsOpen(false);
  };

  // 취향 설문 수정으로 이동
  const goSurvey = () => {
    navigate("/survey");
  };

  // 내 코스 관리로 이동
  const goMyCours = () => {
    navigate("/mycourse");
  };

  // 관심 여행지 관리로 이동
  const goInterest = () => {
    navigate("/interest");
  };

  // 로그아웃
  const handleLogout = () => {
    // 로그아웃 로직 작성
    alert("로그아웃 되었습니다!");
    navigate("/");
  };

  return (
    <>
      {isOpen === true && (
        <MyPageDimmer>
          <SidebarStyle>
            <CloseBtnStyle onClick={closeSideBar} />
            <SidebarContainer>
              <LogoIcStyle />
              <UserContainer>
                <PersonIcStyle />
                <UserFontStyle >{user["nickName"]===""?"로그인해주세요":user["nickName"]+"님"}</UserFontStyle>
              </UserContainer>

              <LineStyle />
              {/* 로그인 여부에 따라 각 메뉴를 클릭했을때의 로직이 다름 */}
              {/* 1. 로그인o: 각 페이지로 보내기 */}
              {/* 2. 로그인x
                    1) 로그인이 필요한 서비스입니다 alert 띄우기
                    2) 로그인 화면으로 보내기
                    3) 사이드바 닫기
              */}
              <MenuContainer>
                <IconMenuContainer
                  onClick={() => {
                    goSurvey();
                    closeSideBar();
                  }}
                >
                  <SurveyIcStyle /> <MenuFont>취향 설문 수정</MenuFont>
                </IconMenuContainer>
                <IconMenuContainer
                  onClick={() => {
                    goMyCours();
                    closeSideBar();
                  }}
                >
                  <MapIcStyle /> <MenuFont>내 코스 관리</MenuFont>
                </IconMenuContainer>
                <IconMenuContainer
                  onClick={() => {
                    goInterest();
                    closeSideBar();
                  }}
                >
                  <InterestIcStyle /> <MenuFont>관심 여행지 관리</MenuFont>
                </IconMenuContainer>
                {/* 로그인 상태일때만 로그아웃 버튼이 나타난다. */}
                <LogoutContainer
                  onClick={() => {
                    handleLogout();
                    closeSideBar();
                  }}
                >
                  <IconMenuContainer>
                    <LogoutIcStyle /> <MenuFont>로그아웃</MenuFont>
                  </IconMenuContainer>
                </LogoutContainer>
              </MenuContainer>
            </SidebarContainer>
          </SidebarStyle>
        </MyPageDimmer>
      )}
    </>
  );
};

export default SideBar;
