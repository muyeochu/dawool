import { atom } from "recoil";
import { City, District } from "../types/regionTypes";

// 첫 번째 취향설문
export const firstState = atom<string[]>({
  key: 'firstState',
  default: [],
});

// 두 번째 취향설문
export const secondState = atom<string>({
  key: 'secondState',
  default: ""
})

// 두 번째 설문에서 선택한 광역시도
export const selectedCityState = atom<City | undefined>({
  key: "selectedCityState",
  default: undefined,
});

// 두 번째 설문에서 선택한 시군구
export const selectedDistrictState = atom<District | undefined>({
  key: "selectedDistrictState",
  default: undefined,
});

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
export const fifthState = atom<number[]>({
  key: 'fifthState',
  default: []
})
