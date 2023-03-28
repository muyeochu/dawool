import axios from "axios";
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useSetRecoilState,useRecoilState } from "recoil";
import {userState,User} from "../../recoil/UserState"

const KakaoAuthHandle = ()=>{
  // const setUser = useSetRecoilState(userState);
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);


  useEffect(()=>{
    let code = new URL(window.location.href).searchParams.get('code')
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    console.log(baseURL);
    const kakaoLogin = async()=>{
      // await axios.get(`http://localhost:8888/api/user/kakao/callback?code=${code}`)
      await axios.get(baseURL+`/api/user/kakao/callback?code=${code}`)
      .then((res)=>{
        console.log(res);
        localStorage.setItem("token",res.data.accessToken);
        console.log(userState);//잘들어옴
        setUserState({
          accessToken : res.data.accessToken,
          accessTokenExpiresIn: res.data.accessTokenExpiresIn,
        grantType: res.data.grantType,
        nickName: res.data.nickName,
        refreshToken: res.data.refreshToken,
        isSurvey: res.data.isSurvey
        })
        // 
        navigate("/tourspot");
        //리코일에 데이터 담고 바로 메인페이지로 보내기
      })
    }
    kakaoLogin()
  },[])
  console.log(user);
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
