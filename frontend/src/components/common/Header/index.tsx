import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState } from "../../../recoil/SearchSelector";

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
  MicIcStyle,
  NavStyle,
  DropDownIcContainer,
  DropDownContainer,
  DropDownContent,
  PersonIcContainer,
} from "./styles";

// icon
import { ReactComponent as LogoIc } from "../../../assets/icon/logoIc.svg";
import { ReactComponent as SearchIc } from "../../../assets/icon/searchIc.svg";
import { ReactComponent as PersonIc } from "../../../assets/icon/personIc.svg";
import { ReactComponent as PersonIc2 } from "../../../assets/icon/person2Ic.svg";

// sidebar
import SideBar from "../../personal";

// modal
import useModal from "../../utils/useModal";
import Mic from "../../search/Mic";

const Header = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  let currentUrl = window.location.pathname;

  const [searchInput, setSearchInput] = useRecoilState(searchState);

  const resetSearchInput = useResetRecoilState(searchState);

  const [search, setSearch] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState("#ffffff");
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setHeaderColor("transparent"); 
    } else {
      setHeaderColor("#ffffff"); 
    }
  }, [scrollPosition, currentUrl]);

  // 로고 클릭시 Intro 페이지로 이동
  const clickLogoIc = () => {
    window.location.href = "/";
  };

  // 검색창
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchIc = (
    e: React.MouseEvent | React.KeyboardEvent<HTMLInputElement>
  ) => {
    // 공백 검사
    const blankPattern = /^\s+|\s+$/g;
    if (search.replace(blankPattern, "") === "") {
      alert("공백은 입력할 수 없습니다!");
      resetSearchInput();
      setSearch("");
      return;
    }

    // 특수문자 검사
    const specialPattern = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (specialPattern.test(search) === true) {
      alert("특수문자는 입력할 수 없습니다!");
      resetSearchInput();
      setSearch("");
      return;
    }
    setSearchInput({ ...searchInput, title: search, barrier: "00000" });
    navigate("/search", { state: search });
    window.location.reload();
  };

  const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchIc(e);
    }
  };

  // 드롭다운 메뉴 이외 공간 클릭 탐지
  useEffect(() => {
    const handleClickOutside: EventListener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsMenuOpen(!isMenuOpen);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // 음성인식 모달창 열기
  const { openModal, closeModal } = useModal();

  const ModalData = {
    type: "mic",
    content: <Mic />,
    callback: () => {
      closeModal();
    },
  };

  // 즐길거리 각 페이지로 이동
  const goTourSpot = () => {
    navigate("/tourspot");
    setIsMenuOpen(false);
  };

  const goCulture = () => {
    navigate("/culture");
    setIsMenuOpen(false);
  };

  const goLeports = () => {
    navigate("/leports");
    setIsMenuOpen(false);
  };

  const goShopping = () => {
    navigate("/shopping");
    setIsMenuOpen(false);
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
              <MicIcStyle
                headercolor={headerColor}
                onClick={() => {
                  openModal(ModalData);
                }}
              />
            </LogoToMic>
            <ListToMy>
              <DropDownIcContainer
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                ismenuopen={isMenuOpen.toString()}
              >
                즐길거리
                {isMenuOpen === true && (
                  <DropDownContainer ref={ref}>
                    <DropDownContent>
                      <li onClick={goTourSpot}>관광지</li>
                      <li onClick={goCulture}>문화시설</li>
                      <li onClick={goLeports}>레포츠</li>
                      <li onClick={goShopping}>쇼핑</li>
                    </DropDownContent>
                  </DropDownContainer>
                )}
              </DropDownIcContainer>

              <NavStyle to="/restaurant">식당</NavStyle>
              <NavStyle to="/accommodation">숙박</NavStyle>

              <PersonIcContainer onClick={() => setIsPageOpen(true)}>
                {headerColor === "transparent" ? <PersonIc2 /> : <PersonIc />}
              </PersonIcContainer>
            </ListToMy>
          </ElementContainer>
        </GridItems>
        <SideBar isOpen={isPageOpen} setIsOpen={setIsPageOpen} />
      </HeaderContainer>
    </HeaderFont>
  );
};

export default Header;
