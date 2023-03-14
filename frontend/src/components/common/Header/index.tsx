import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// styles
import {
  HeaderFont,
  HeaderContainer,
  InvisibleBox,
  GridItems,
  ElementContainer,
  LogoToMic,
  ListToMy,
  LogoIcContainer,
  SearchBarContainer,
  SearchBarInput,
  SearchIcContainer,
  MicIcContainer,
  NavStyle,
  PersonIcContainer,
} from "./styles";

// icon
import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as SearchIc } from "../../../assets/icon/searchIc.svg";
import { ReactComponent as MicIc } from "../../../assets/icon/micIc.svg";
import { ReactComponent as PersonIc } from "../../../assets/icon/personIc.svg";
import { ReactComponent as PersonIc2 } from "../../../assets/icon/person2Ic.svg";

interface Props {
  searchBar?: boolean;
  mike?: boolean;
  tourSpot?: boolean;
  restaurant?: boolean;
  accommodation?: boolean;
  myPage?: boolean;
}

const Header = ({
  searchBar,
  mike,
  tourSpot,
  restaurant,
  accommodation,
  myPage,
}: Props) => {
  const navigate = useNavigate();
  let currentUrl = window.location.pathname;

  const [search, setSearch] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState("#ffffff");

  // Scroll 위치를 감지
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (currentUrl === "/" && scrollPosition < 100) {
      setHeaderColor("transparent"); // scrollPosition이 100보다 크면 headerColor를 변경
    } else {
      setHeaderColor("#ffffff"); // 그 외의 경우에는 초기값으로 변경
    }
  }, [scrollPosition, currentUrl]);

  // 검색창
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clickLogoIc = (e: React.MouseEvent) => {
    window.location.href = "/";
  };

  const handleSearchIc = (
    e: React.MouseEvent | React.KeyboardEvent<HTMLInputElement>
  ) => {
    // 공백 검사
    const blank_pattern = /^\s+|\s+$/g;
    if (search.replace(blank_pattern, "") === "") {
      console.log("아무것도 입력되지 않음!");
      setSearch("");
      return;
    }
    navigate("/search", { state: search });
  };

  // 엔터키 확인
  const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchIc(e);
    }
  };

  return (
    <HeaderFont>
      {currentUrl !== "/" && <InvisibleBox />}
      <HeaderContainer headercolor={headerColor}>
        <GridItems>
          <ElementContainer>
            <LogoToMic>
              <LogoIcContainer onClick={clickLogoIc}>
                <LogoIc />
              </LogoIcContainer>

              <SearchBarContainer>
                <SearchBarInput
                  headercolor={headerColor}
                  placeholder="여행지를 검색해보세요"
                  type="text"
                  value={search}
                  onChange={handleSearchInput}
                  onKeyDown={(e) => onCheckEnter(e)}
                />
                <SearchIcContainer
                  headercolor={headerColor}
                  onClick={handleSearchIc}
                >
                  <SearchIc />
                </SearchIcContainer>
              </SearchBarContainer>
              <MicIcContainer headercolor={headerColor}>
                <MicIc />
              </MicIcContainer>
            </LogoToMic>
            <ListToMy>
              <NavStyle to="/tourspot">즐길거리</NavStyle>
              <NavStyle to="/restaurant">식당</NavStyle>
              <NavStyle to="/accommodation">숙박</NavStyle>

              <PersonIcContainer>
                <PersonIc />
              </PersonIcContainer>
            </ListToMy>
          </ElementContainer>
        </GridItems>
      </HeaderContainer>
    </HeaderFont>
  );
};

export default Header;

Header.defaultProps = {};
