import { atom, selector } from "recoil";

// 네 번째 설문만 완료! 다른 설문은 다시 확인하기!

// 첫 번째 취향설문
export const firstState = atom<number[]>({
  key: 'firstState',
  default: [],
});

// 두 번째 취향설문
export const secondState = atom<string>({
  key: 'secondState',
  default: ""
})

// 세 번째 취향설문
export const thirdState = atom<string>({
  key: 'thirdState',
  default: "",
});

// 네 번째 취향설문
export const fourthState = atom<string>({
  key: 'fourthState',
  default: ""
})

// 다섯 번째 취향설문
export const fifthState = atom<string>({
  key: 'fifthState',
  default: ""
})