import {
  BackgroundContainer,
  
  BackgroundImgStyle,
  MainFontStyle,
  KakaoButton,
} from "./styles";
import BackgroundImg from "../../assets/images/kakaoLoginImg.png";

const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAOMAP_API_KEY;
  const REDIRECT_URI = `http://localhost:3000/callback`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <BackgroundContainer>
        <MainFontStyle> 인기 관광지 외에도<br></br>맞춤형 관광지 추천을 받고 싶으신가요?</MainFontStyle>
        <KakaoButton onClick={handleLogin}/>
        <BackgroundImgStyle src={BackgroundImg} />
      </BackgroundContainer>
    </>
  );
};

export default LoginPage;
