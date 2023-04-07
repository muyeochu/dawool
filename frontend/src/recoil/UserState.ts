import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); // localStorage에 저장됨

export interface UserType {
  accessToken: String;
  accessTokenExpiresIn: number;
  grantType: String;
  nickName: String;
  refreshToken: String;
  isSurveyed: boolean;
}
export const User = (): UserType => ({
  accessToken: "",
  accessTokenExpiresIn: 0,
  grantType: "",
  nickName: "",
  refreshToken: "",
  isSurveyed: false,
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
    return user.isSurveyed;
  },
});
