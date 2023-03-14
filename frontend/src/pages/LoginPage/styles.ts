import styled from "styled-components";
import KakaoImg from "../../assets/images/kakao_login_large_wide.png"
import BackImg from "../../assets/images/loginBackImg.png"


export const BackgroundContainer = styled.div`
    grid-column:1/span 3;
    text-align:center;
    position: absolute;
    height : 92vh;
    width: 100%;
    background-image:url(${BackImg});
    background-size:cover;
`

export const LoginText = styled.h1`
position: absolute;
width: 798px;
height: 128px;
left: 400px;
top: 230px;

font-family: 'SUIT';
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
/* or 133% */

display: inline-block;
align-items: center;
text-align: center;
letter-spacing: -0.019em;

color: #FFFFFF;
`

export const KakaoButton = styled.img.attrs({
    src:`${KakaoImg}`
})`
position: absolute;

left: 500px;
top: 420px;

font-family: 'SUIT';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 64px;
/* or 133% */

display: inline-block;
align-items: center;
text-align: center;
letter-spacing: -0.019em;

color: #FFFFFF;

cursor:pointer;
`
