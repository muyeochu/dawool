import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 첫 번째 취향설문
export const firstState = atom<number[]>({
  key: 'firstState',
  default: [],
});

// 두 번쨰 취향설문

// 세 번째 취향설문
export const secondState = atom<number>({
  key: 'secondState',
  default: 1,
});

// 네 번쨰 취향설문
export const fourthState = atom<string>({
  key: 'fourthState',
  default: ""
})

// 다섯 번째 취향설문