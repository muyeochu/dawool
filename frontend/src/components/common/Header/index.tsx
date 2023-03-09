import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

// type

// styles
import {
  HeaderContainer,
  LogoIcContainer,
  SearchBarContainer,
  SearchBarInput,
  SearchIcContainer,
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

  const [search, setSearch] = useState("");

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
    <header>
      <HeaderContainer>
        {/* <NavLink to="/">
          <LogoIcContainer>
            <LogoIc />
          </LogoIcContainer>
        </NavLink> */}

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

        <Link to="/tourspot">관광지</Link>
        <Link to="/restaurant">식당</Link>
        <Link to="/accommodation">숙박</Link>

        <PersonIc />
      </HeaderContainer>
    </header>
  );
};

export default Header;

Header.defaultProps = {};
