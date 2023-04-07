import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { userState } from "../../recoil/UserState";
import Loading from "../common/Loading";

const KakaoAuthHandle = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    const kakaoLogin = async () => {
      await axios
        .get(baseURL + `/api/user/kakao/callback?code=${code}`)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("recentContentId", "0");

            setUserState({
              accessToken: res.data.accessToken,
              accessTokenExpiresIn: res.data.accessTokenExpiresIn,
              grantType: res.data.grantType,
              nickName: res.data.nickName,
              refreshToken: res.data.refreshToken,
              isSurveyed: res.data.surveyed,
            });
            //
            navigate("/tourspot");
            window.location.reload();
            //리코일에 데이터 담고 바로 메인페이지로 보내기
          } else {
            window.localStorage.clear();
            setUser({
              accessToken: "",
              accessTokenExpiresIn: 0,
              grantType: "",
              nickName: "",
              refreshToken: "",
              isSurveyed: false,
            });
            alert(
              "로그인 에러가 발생했습니다. 다시 로그인 해 주시기 바랍니다."
            );
            navigate("/login");
            window.location.reload();
          }
        })
        .catch((e) => {
          alert("로그인 에러가 발생했습니다. 다시 로그인 해 주시기 바랍니다.");
          navigate("/login");
          window.location.reload();
        });
    };
    kakaoLogin();
  }, []);

  return (
    <>
      <Loading />
    </>
  );
};
export default KakaoAuthHandle;
