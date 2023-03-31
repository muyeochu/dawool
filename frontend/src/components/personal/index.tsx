import { useNavigate } from "react-router-dom";
import { userState } from "../../recoil/UserState";
import { useRecoilState } from "recoil";

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
    if (!checkLogin()) navigate("/survey");
  };

  // 내 코스 관리로 이동
  const goMyCours = () => {
    if (!checkLogin()) navigate("/mycourse");
  };

  // 관심 여행지 관리로 이동
  const goInterest = () => {
    if (!checkLogin()) navigate("/interest");
  };

  // 로그아웃
  const handleLogout = () => {
    // 로그아웃 로직 작성
    alert("로그아웃 되었습니다!");
    navigate("/");
  };

  const checkLogin = () => {
    if (user.accessToken === "") {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
      return true;
    } else return false;
  };
  const goLogin = () => {
    navigate("/login");
    closeSideBar();
    const bfLogin = document.getElementById("beforeLogin");
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
                {user.accessToken === "" ? (
                  <UserFontStyle
                    onClick={goLogin}
                    style={{ cursor: "pointer" }}
                  >
                    로그인해주세요
                  </UserFontStyle>
                ) : (
                  <UserFontStyle>
                    {user["nickName"]} <span>님</span>
                  </UserFontStyle>
                )}
              </UserContainer>

              <LineStyle />

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
                {user.accessToken !== "" && (
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
                )}
              </MenuContainer>
            </SidebarContainer>
          </SidebarStyle>
        </MyPageDimmer>
      )}
    </>
  );
};

export default SideBar;
