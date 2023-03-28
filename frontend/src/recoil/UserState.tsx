import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); // localStorage에 저장됨
//const {persistAtom} = recoilPersist({
//  key:"sessionKey",
//  storage:sessionStorage,
// });
interface UserType {
  accessToken: String;
  nickName: String;
  refreshToken: String;
  isSurvey: boolean;
  recentlyViewed: number | undefined; // 최근 본 게시물 저장
}
export const User: UserType = {
  accessToken: "",
  nickName: "",
  refreshToken: "",
  isSurvey: false,
  recentlyViewed: undefined,
};
export const userState = atom({
  key: "userState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

//recoil-persist : 새로고침해도 로그인정보 남아있게 하기
//로그아웃 - 로컬스토리지 지워지게 됨 퍼지?
