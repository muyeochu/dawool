import axios from "axios";
import { useEffect } from "react";

export const Waiting = ()=>{
    useEffect(()=>{
    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");
    console.log(code)
    const grant_type = "authorization_code";
    const client_id = `http://localhost:3000/f9d7aca66b9d117f55a3c47a1f2f6eef`
  const REDIRECT_URI = 'http://localhost:8888/api/user/kakao/callback';
    // const REDIRECT_URI = `https://localhost:8888/api/user/kakao/callback`;

    axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
            headers:{
                "Content-type":
                "application/x-www-form-urlencoded;charset=utf-8",
            },
        }
    )
    .then((res)=>{
        console.log(res);
    });
    },[]);
    return(
        <div>
            잠시만 기다려주세요
        </div>
    )
}