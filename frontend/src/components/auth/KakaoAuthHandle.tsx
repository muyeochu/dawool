import axios from "axios";
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useSetRecoilState,useRecoilState } from "recoil";
import {userState,User} from "../../recoil/UserState"
const REST_API_KEY = `f9d7aca66b9d117f55a3c47a1f2f6eef`;
const REDIRECT_URI = `http://localhost:3000/api/user/kakao/callback`;
const KAKAO_AUTH_URL =`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoAuthHandle = ()=>{
  // const setUser = useSetRecoilState(userState);
  const [nickName, setNickName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  useEffect(()=>{
    let code = new URL(window.location.href).searchParams.get('code')
    const kakaoLogin = async()=>{
      await axios.get(`http://localhost:8888/api/user/kakao/callback?code=${code}`)
      .then((res)=>{
        console.log(res);
        localStorage.setItem("token",res.data.accessToken);
        console.log(userState);//잘들어옴
        setNickName("");
        setAccessToken("");
        setRefreshToken("");
        setUser(res.data);
        console.log(user);
        navigate("/tourspot");
        //리코일에 데이터 담고 바로 메인페이지로 보내기

      })
    }
    kakaoLogin()
  },[])
  return (
    <>
    <Container></Container>
    </>
  )
}
export default KakaoAuthHandle
const Container = styled.div`
  width:100vwm;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`
