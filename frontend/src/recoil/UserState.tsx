import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist(); // localStorage에 저장됨
//const {persistAtom} = recoilPersist({
//  key:"sessionKey",
//  storage:sessionStorage,
// });
interface UserType{
    accessToken:String,
    accessTokenExpiresIn:number,
    grantType:String,
    nickName:String,
    refreshToken:String,
    isSurvey:boolean,
}
export const User=():UserType=>({
    accessToken:"",
    accessTokenExpiresIn:0,
    grantType:"",
    nickName:"",
    refreshToken:"",
    isSurvey:false
})
export const userState = atom({
    key:"userState",
    default: User(),
    effects_UNSTABLE:[persistAtom],
})


//recoil-persist : 새로고침해도 로그인정보 남아있게 하기
//로그아웃 - 로컬스토리지 지워지게 됨 퍼지?