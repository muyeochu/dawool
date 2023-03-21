import { atom, selector } from "recoil";
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

export const surveyState = atom<number[]>({
  key: 'surveyState',
  default: [],
});