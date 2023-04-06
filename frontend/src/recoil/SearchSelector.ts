import { atom, SerializableParam } from "recoil";


import { SearchDataTypes } from "../types/searchTypes";

export interface ParamTypes {
  title: string;
  type: number;
  barrier: string;
  page: number;
  size: number;
  [key: string]: SerializableParam;
}

export const searchState = atom<ParamTypes>({
  key: "searchState",
  default: {
    title: "",
    type: 0,
    barrier: "00000",
    page: 0,
    size: 10,
  },
});


