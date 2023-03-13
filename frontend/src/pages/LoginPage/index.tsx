import KakaoImg from "../../assets/images/kakao_login_large_wide.png"
import { BackgroundContainer, LoginText } from "./styles";

const LoginPage = () => {
  const REST_API_KEY = 'f9d7aca66b9d117f55a3c47a1f2f6eef';
  const REDIRECT_URI = 'http://localhost:3000/waiting';
  const KAKAO_AUTH_URL =`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  const handleLogin=()=>{
    window.location.href=KAKAO_AUTH_URL;
  }
  
  return (
    <BackgroundContainer>
    <LoginText>인기 관광지 외에도 맞춤형 관광지 추천을 받고 싶으신가요?</LoginText>
    <a id="kakao-login-btn" onClick={handleLogin} style={{cursor:'pointer'}}>
      <img src={KakaoImg}></img>
    </a>
    </BackgroundContainer>
    
  );
};

export default LoginPage;
