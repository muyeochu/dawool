import axios from "axios";
import {useEffect} from 'react';
import styled from 'styled-components';

const REST_API_KEY = `f9d7aca66b9d117f55a3c47a1f2f6eef`;
const REDIRECT_URI = `http://localhost:3000/api/user/kakao/callback`;
const KAKAO_AUTH_URL =`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const KakaoAuthHandle = ()=>{
  console.log('kakaoAuth')
  useEffect(()=>{
    let code = new URL(window.location.href).searchParams.get('code')
    const kakaoLogin = async()=>{
      await axios.get(`http://localhost:8888/api/user/kakao/callback?code=${code}`)
      .then((res)=>{
        console.log(res);
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
