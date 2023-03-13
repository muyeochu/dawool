import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

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
  NavStyle,
  PersonIcContainer,
} from "./styles";

// icon
import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as SearchIc } from "../../../assets/icon/searchIc.svg";
import { ReactComponent as MicIc } from "../../../assets/icon/micIc.svg";
import { ReactComponent as PersonIc } from "../../../assets/icon/personIc.svg";

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
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

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

  // {currentUrl === "/" ? null : <InvisibleBox />

  return (
    <HeaderFont>
      {scrollPosition < 100 ? (
        <>
          <HeaderContainer>
            <GridItems>
              <ElementContainer>
                <LogoToMic>
                  <LogoIcContainer onClick={clickLogoIc}>
                    <LogoIc />
                  </LogoIcContainer>

                  <SearchBarContainer>
                    <SearchBarInput
                      placeholder="여행지를 검색해보세요"
                      type="text"
                      value={search}
                      onChange={handleSearchInput}
                      onKeyDown={(e) => onCheckEnter(e)}
                    />
                    <SearchIcContainer onClick={handleSearchIc}>
                      <SearchIc />
                    </SearchIcContainer>
                  </SearchBarContainer>

                  <MicIc />
                </LogoToMic>
                <ListToMy>
                  <NavStyle to="/tourspot">관광지</NavStyle>
                  <NavStyle to="/restaurant">식당</NavStyle>
                  <NavStyle to="/accommodation">숙박</NavStyle>

                  <PersonIcContainer>
                    <PersonIc />
                  </PersonIcContainer>
                </ListToMy>
              </ElementContainer>
            </GridItems>
          </HeaderContainer>
        </>
      ) : null}
    </HeaderFont>
  );
};

export default Header;

Header.defaultProps = {};
