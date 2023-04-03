import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); // localStorage에 저장됨
//const {persistAtom} = recoilPersist({
//  key:"sessionKey",
//  storage:sessionStorage,
// });
export interface UserType {
  accessToken: String;
  accessTokenExpiresIn: number;
  grantType: String;
  nickName: String;
  refreshToken: String;
  isSurvey: boolean;
}
export const User = (): UserType => ({
  accessToken: "",
  accessTokenExpiresIn: 0,
  grantType: "",
  nickName: "",
  refreshToken: "",
  isSurvey: false,
});
export const userState = atom({
  key: "userState",
  default: User(),
  effects_UNSTABLE: [persistAtom],
});

export const isSurveyState = selector({
  key: "isSurveyState",
  get: ({ get }) => {
    const user = get(userState);
    return user.isSurvey;
  },
});

//recoil-persist : 새로고침해도 로그인정보 남아있게 하기
//로그아웃 - 로컬스토리지 지워지게 됨 퍼지?

// 최근 본 여행지의 contentId 저장
// export const recentViewdContentState = atom<number>({
//     key: 'recentViewdContentState',
//     default: 0
// })