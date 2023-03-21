import { atom } from "recoil";

export const surveyState = atom<string[]>({
  key: 'surveyState',
  default: [],
});