import { HeaderContainer } from "./styles";

interface Props {
  searchBar?: boolean;
  mike?: boolean;
  tourSpot?: boolean;
  restaurant?: boolean;
  accommodation?: boolean;
  myPage?: boolean;
}

// type HeaderColor = {
//   color: Props;
// };

const Header = ({
  searchBar,
  mike,
  tourSpot,
  restaurant,
  accommodation,
  myPage,
}: Props) => {
  return (
    <header>
      <HeaderContainer>
        <span>로고이미지</span>
        <span>검색바</span>
        <span>마이크</span>
        <span>관광지</span>
        <span>식당</span>
        <span>숙박</span>
        <span>마이페이지</span>
      </HeaderContainer>
    </header>
  );
};

export default Header;

Header.defaultProps = {};
